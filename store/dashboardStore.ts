import { create } from 'zustand';
import { SalesRecord, WeeklyTarget, WeeklyReport } from '@/types';
import { ResisteredDateRange } from '@/types';

type DashboardState = {
  salesRecords: SalesRecord[];
  salesDates: string[];
  lastFetchedUserId: number | null;
  weeklyReports: WeeklyReport[];
  weeklyTargets: WeeklyTarget[];
  registeredReportRanges: ResisteredDateRange[];
  registeredTargetRanges: ResisteredDateRange[];
  fetchSalesRecord: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyReport: (userId: number, force?: boolean) => Promise<void>;
  fetchWeeklyTarget: (userId: number, force?: boolean) => Promise<void>;
};

const useDashboardStore = create<DashboardState>((set, get) => ({
  salesRecords: [],
  salesDates: [], // 売上記録の日付データ
  lastFetchedUserId: null,
  weeklyReports: [],
  weeklyTargets: [],
  registeredReportRanges: [], // 登録したレポートの日付データ
  registeredTargetRanges: [], // 登録した目標の日付データ


  fetchSalesRecord: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().salesRecords.length === 0) {
      try {
        const response = await fetch(`/api/salesrecord`);
        const data: SalesRecord[] = await response.json();
        const dates = data.map(record => record.date);
        set({ salesRecords: data, salesDates: dates, lastFetchedUserId: userId });

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
        set({ weeklyTargets: data, registeredTargetRanges, lastFetchedUserId: userId });
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
}))

export default useDashboardStore ;