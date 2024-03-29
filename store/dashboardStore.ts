import { create } from 'zustand';
import { SalesRecord, WeeklyTarget, WeeklyReport, ProgressData, ResisteredDateRange, JobRecord, CustomersRecord, MonthlyReport } from '@/types';
import { getThisWeekRange } from '@/utils/dateUtils';
import { calculateTotal, calculateSetRate, calculateAverage } from '@/utils/calculateUtils';
import { showErrorNotification } from '@/utils/notifications';

type DashboardState = {
  salesRecords: SalesRecord[];
  salesDates: string[];
  weeklyReports: WeeklyReport[];
  registeredReportRanges: ResisteredDateRange[];
  weeklyTargets: WeeklyTarget[];
  registeredTargetRanges: ResisteredDateRange[];
  monthlyReports: MonthlyReport[];
  thisWeekRecord: SalesRecord[];
  thisWeekAmount: number;
  thisWeekNumber: number;
  thisWeekCount: number;
  thisWeekTarget: number;
  thisWeekSet: number;
  thisWeekAverage: number;
  jobsRecords: JobRecord[];
  jobsDates: string[];
  jobsList: string[];
  customersRecord: CustomersRecord;
  fetchSalesRecord: (force?: boolean) => Promise<void>;
  fetchWeeklyReport: (force?: boolean) => Promise<void>;
  fetchWeeklyTarget: (force?: boolean) => Promise<void>;
  fetchMonthlyReport:(force?: boolean) => Promise<void>;
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
  monthlyReports: [],
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
        const response = await fetch(`/features/dairyrecord/api/getRecord`);
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
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },
  fetchWeeklyTarget: async (force = false) => {
    if (force || get().weeklyTargets.length === 0) {
      try {
        const response = await fetch(`/features/weekProgress/api/getTarget`);
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
        thisWeekTarget: thisWeekTarget ? thisWeekTarget.target : 0
      });
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },
  fetchWeeklyReport: async (force = false) => {
    if (force || get().weeklyReports.length === 0) {
      try {
        const response = await fetch(`/features/weekly/api/getWeeklyReport`);
        const data: WeeklyReport[] = await response.json();
        const registeredReportRanges = data.map(report => ({
          startDate: report.start_date,
          endDate: report.end_date
        }));
        set({ weeklyReports: data, registeredReportRanges});
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
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
    if (force || get().jobsRecords.length === 0) {
      try {
        const response = await fetch(`/features/calender/api/getJobs`);
        const data: JobRecord[] = await response.json();
        const dates = data.map(record => record.date);
        const jobs = data.map(record => record.job);
        set({
          jobsRecords: data, 
          jobsDates: dates, 
          jobsList: jobs,
        });
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },
  fetchCustomersRecord: async (force = false) => {
    if (force || Object.keys(get().customersRecord).length === 0)  {
      try {
        const response = await fetch(`/features/customergraph/api/getCustomerRecord`);
        const data: CustomersRecord = await response.json();
        set({
          customersRecord: data
        });
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },
  fetchMonthlyReport: async (force = false) => {
    if (force || get().monthlyReports.length === 0) {
      try {
        const response = await fetch(`/features/report/api/getMonthlyReport`);
        const data: MonthlyReport[] = await response.json();
        set({ monthlyReports: data});
      } catch (error) {
        showErrorNotification('データの取得に失敗しました');
      }
    }
  },
}))

export default useDashboardStore ;