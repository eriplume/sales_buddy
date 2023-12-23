import { create } from 'zustand';
import { SalesRecord, WeeklyTarget, WeeklyReport } from '@/types';
import { ResisteredDateRange } from '@/types';
import { getStartOfWeek, getEndOfWeek, formatDate } from '@/utils/dateUtils';

type DashboardState = {
  salesRecords: SalesRecord[];
  salesDates: string[];
  lastFetchedUserId: number | null;
  thisWeekRecord: SalesRecord[];
  weeklyReports: WeeklyReport[];
  weeklyTargets: WeeklyTarget[];
  thisWeekTarget: number | null;
  thisWeekAmount: number;
  registeredReportRanges: ResisteredDateRange[];
  registeredTargetRanges: ResisteredDateRange[];
  fetchSalesRecord: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyReport: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyTarget: (userId: number, force?: boolean) => Promise<void>;
  getThisWeekProgress: () => number | null;
};

// 今週の開始日と終了日を取得する関数
const getThisWeekRange = () => {
  const start = formatDate(getStartOfWeek(new Date()));
  const end = formatDate(getEndOfWeek(new Date()));
  return { start, end };
};

const useDashboardStore = create<DashboardState>((set, get) => ({
  salesRecords: [],
  salesDates: [], // 売上記録の日付データ
  lastFetchedUserId: null,
  weeklyReports: [],
  weeklyTargets: [],
  registeredReportRanges: [], // 登録したレポートの日付データ
  registeredTargetRanges: [], // 登録した目標の日付データ
  thisWeekRecord: [],
  thisWeekAmount: 0,
  thisWeekTarget: 0,

  fetchSalesRecord: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().salesRecords.length === 0) {
      try {
        const response = await fetch(`/api/salesrecord`);
        const data: SalesRecord[] = await response.json();
        const dates = data.map(record => record.date);
        const { start, end } = getThisWeekRange();
        const thisWeekRecord = data.filter(record => 
          record.date >= start && record.date <= end
        );
        const thisWeekAmount = thisWeekRecord.reduce((sum, record) => sum + record.total_amount, 0);
        set({
          salesRecords: data, 
          salesDates: dates, 
          lastFetchedUserId: userId,
          thisWeekRecord,
          thisWeekAmount,
        });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
  fetchWeeklyTarget: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().weeklyTargets.length === 0) {
      try {
        const response = await fetch(`/api/weeklytarget`);
        const data: WeeklyTarget[] = await response.json();
        const registeredTargetRanges = data.map(target => ({
          startDate: target.start_date,
          endDate: target.end_date
        }));
      // 今週の目標を取得
      const { start, end } = getThisWeekRange();
      const thisWeekTarget = data.find(target => 
        target.start_date == start && target.end_date == end
      );
      set({ 
        weeklyTargets: data, 
        registeredTargetRanges, 
        lastFetchedUserId: userId,
        thisWeekTarget: thisWeekTarget ? thisWeekTarget.target : null
      });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
  fetchWeeklyReport: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().weeklyReports.length === 0) {
      try {
        const response = await fetch(`/api/weeklyreport`);
        const data: WeeklyReport[] = await response.json();
        const registeredReportRanges = data.map(report => ({
          startDate: report.start_date,
          endDate: report.end_date
        }));
        set({ weeklyReports: data, registeredReportRanges, lastFetchedUserId: userId });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
  getThisWeekProgress: () => {
    const thisWeekTarget = get().thisWeekTarget;
    const thisWeekAmount = get().thisWeekAmount;
    if (thisWeekTarget!==null) {
      const progress = thisWeekTarget - thisWeekAmount;
      return progress >= 0 ? progress : 0; // 目標を超えた場合は0を返す
    } else {
      return null;
    }
  },
}))

export default useDashboardStore ;