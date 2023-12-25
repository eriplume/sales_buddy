import { create } from 'zustand';
import { SalesRecord, WeeklyTarget, WeeklyReport, ProgressData, ResisteredDateRange, JobRecord } from '@/types';
import { getThisWeekRange } from '@/utils/dateUtils';

type DashboardState = {
  lastFetchedUserId: number | null;
  salesRecords: SalesRecord[];
  salesDates: string[];
  weeklyReports: WeeklyReport[];
  registeredReportRanges: ResisteredDateRange[];
  weeklyTargets: WeeklyTarget[];
  registeredTargetRanges: ResisteredDateRange[];
  thisWeekRecord: SalesRecord[];
  thisWeekAmount: number;
  thisWeekNumber: number;
  thisWeekCount: number;
  thisWeekTarget: number | null;
  thisWeekSet: number;
  thisWeekAverage: number;
  jobsRecords: JobRecord[];
  jobsDates: string[];
  fetchSalesRecord: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyReport: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyTarget: (userId: number, force?: boolean) => Promise<void>;
  fetchJobsRecord: (userId: number, force?: boolean) => Promise<void>;
  getThisWeekProgress: () => ProgressData;
};

const useDashboardStore = create<DashboardState>((set, get) => ({
  lastFetchedUserId: null,
  salesRecords: [],
  salesDates: [], // 売上記録の日付データ
  weeklyReports: [],
  registeredReportRanges: [], // 登録したレポートの日付データ
  weeklyTargets: [],
  registeredTargetRanges: [], // 登録した目標の日付データ
  thisWeekRecord: [],
  thisWeekAmount: 0,
  thisWeekNumber: 0,
  thisWeekCount: 0,
  thisWeekTarget: 0,
  thisWeekSet: 0,
  thisWeekAverage: 0,
  jobsRecords: [],
  jobsDates: [], // 売上記録の日付データ
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
        const thisWeekNumber = thisWeekRecord.reduce((sum, record) => sum + record.total_number, 0);
        const thisWeekCount = thisWeekRecord.reduce((sum, record) => sum + record.count, 0);
        const thisWeekSet = thisWeekCount > 0 ? thisWeekNumber / thisWeekCount : 0;
        const thisWeekAverage = thisWeekCount > 0 ? thisWeekAmount / thisWeekCount : 0;
        set({
          salesRecords: data, 
          salesDates: dates, 
          lastFetchedUserId: userId,
          thisWeekRecord,
          thisWeekAmount,
          thisWeekNumber,
          thisWeekCount,
          thisWeekSet,
          thisWeekAverage,
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
    const thisWeekAmount = get().thisWeekAmount || 0; // null の場合は 0 にする
    const thisWeekTarget = get().thisWeekTarget || 0; // null の場合は 0 にする
    const progress = thisWeekTarget > 0 ? thisWeekTarget - thisWeekAmount : 0;
    const progressPercent = thisWeekTarget > 0 ? (thisWeekAmount / thisWeekTarget) * 100 : 0;
    return {
      progress,
      progressPercent
    };
  },
  fetchJobsRecord: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().jobsRecords.length === 0) {
      try {
        const response = await fetch(`/api/jobrecord`);
        const data: JobRecord[] = await response.json();
        const dates = data.map(record => record.date);
        set({
          jobsRecords: data, 
          jobsDates: dates, 
          lastFetchedUserId: userId,
        });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
}))

export default useDashboardStore ;