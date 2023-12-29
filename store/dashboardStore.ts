import { create } from 'zustand';
import { SalesRecord, WeeklyTarget, WeeklyReport, ProgressData, ResisteredDateRange, JobRecord, CustomersRecord } from '@/types';
import { getThisWeekRange } from '@/utils/dateUtils';
import { calculateTotal, calculateSetRate, calculateAverage } from '@/utils/calculateUtils';

type DashboardState = {
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
  jobsList: string[];
  customersRecord: CustomersRecord;
  fetchSalesRecord: (force?: boolean) => Promise<void>;
  fetchWeeklyReport: (force?: boolean) => Promise<void>;
  fetchWeeklyTarget: (force?: boolean) => Promise<void>;
  fetchJobsRecord: (force?: boolean) => Promise<void>;
  getThisWeekProgress: () => ProgressData;
  fetchCustomersRecord: (force?: boolean) => Promise<void>;
};

const useDashboardStore = create<DashboardState>((set, get) => ({
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
  jobsDates: [], 
  jobsList: [],
  customersRecord: {},
  fetchSalesRecord: async (force = false) => {
    if (force || get().salesRecords.length === 0) {
      try {
        const response = await fetch(`/api/salesrecord`);
        const data: SalesRecord[] = await response.json();
        const dates = data.map(record => record.date);
        const { start, end } = getThisWeekRange();
        const thisWeekRecord = data.filter(record => 
          record.date >= start && record.date <= end
        );
        const thisWeekAmount = calculateTotal(thisWeekRecord, 'total_amount');
        const thisWeekNumber = calculateTotal(thisWeekRecord, 'total_number');
        const thisWeekCount = calculateTotal(thisWeekRecord, 'count');
        const thisWeekSet = calculateSetRate(thisWeekNumber, thisWeekCount);
        const thisWeekAverage = calculateAverage(thisWeekAmount, thisWeekCount);
        set({
          salesRecords: data, 
          salesDates: dates, 
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
  fetchWeeklyTarget: async (force = false) => {
    if (force || get().weeklyTargets.length === 0) {
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
        thisWeekTarget: thisWeekTarget ? thisWeekTarget.target : null
      });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
  fetchWeeklyReport: async (force = false) => {
    if (force || get().weeklyReports.length === 0) {
      try {
        const response = await fetch(`/api/weeklyreport`);
        const data: WeeklyReport[] = await response.json();
        const registeredReportRanges = data.map(report => ({
          startDate: report.start_date,
          endDate: report.end_date
        }));
        set({ weeklyReports: data, registeredReportRanges});
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
  fetchJobsRecord: async (force = false) => {
    console.log("fetchJobsRecord called");
    if (force || get().jobsRecords.length === 0) {
      try {
        const response = await fetch(`/api/jobrecord`);
        const data: JobRecord[] = await response.json();
        const dates = data.map(record => record.date);
        const jobs = data.map(record => record.job);
        set({
          jobsRecords: data, 
          jobsDates: dates, 
          jobsList: jobs,
        });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
  fetchCustomersRecord: async (force = false) => {
    if (force || Object.keys(get().customersRecord).length === 0)  {
      try {
        const response = await fetch(`/api/customers`);
        const data: CustomersRecord = await response.json();
        set({
          customersRecord: data
        });
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
}))

export default useDashboardStore ;