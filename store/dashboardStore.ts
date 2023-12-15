import { create } from 'zustand';
import { SalesRecord } from '@/types/SalesRecord';

type DashboardState = {
  salesRecords: SalesRecord[];
  salesDates: string[];
  fetchData: (userId: number, force?: boolean) => Promise<void>;
  lastFetchedUserId: number | null;
};

const useDashboardStore = create<DashboardState>((set, get) => ({
  salesRecords: [],
  salesDates: [], // 売上記録の日付データ
  lastFetchedUserId: null,

  fetchData: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().salesRecords.length === 0) {
      try {
        const response = await fetch(`/api/salesrecord`);

        if (!response.ok) { throw new Error('サーバーエラー')}

        const data: SalesRecord[] = await response.json();
        const dates = data.map(record => record.date);
        set({ salesRecords: data, salesDates: dates, lastFetchedUserId: userId });

      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
}))

export default useDashboardStore ;