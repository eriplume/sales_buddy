"use client"
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';

export const useFetchData = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchWeeklyTarget = useDashboardStore((state) => state.fetchWeeklyTarget);

  useEffect(() => {
    if (railsUserId) {
      fetchSalesRecord(railsUserId);
      fetchWeeklyReport(railsUserId);
      fetchWeeklyTarget(railsUserId);
    }
  }, [railsUserId, fetchSalesRecord, fetchWeeklyTarget, fetchWeeklyReport]);
}

export const useFetchResisterdDay = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);

  useEffect(() => {
    if (railsUserId) {
      fetchSalesRecord(railsUserId);
    }
  }, [railsUserId, fetchSalesRecord]);
}
