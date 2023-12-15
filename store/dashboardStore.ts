import { create } from 'zustand';

type DashboardState = {
  salesRecords: any[]; 
  fetchData: (userId: number, force?: boolean) => Promise<void>;
  lastFetchedUserId: number | null;
};

const useDashboardStore = create<DashboardState>((set, get) => ({
  salesRecords: [],
  lastFetchedUserId: null,

  fetchData: async (userId, force = false) => {
    if (force || get().lastFetchedUserId !== userId || get().salesRecords.length === 0) {
      try {
        const response = await fetch(`/api/salesrecord`);

        if (!response.ok) { throw new Error('サーバーエラー')}

        const data = await response.json();
        set({ salesRecords: data, lastFetchedUserId: userId });

      } catch (error) {
        console.error("Failed to fetch", error);
      }
    }
  },
}))

export default useDashboardStore ;