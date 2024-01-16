"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';

export const useFetch = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchWeeklyTarget = useDashboardStore((state) => state.fetchWeeklyTarget);
  useEffect(() => {
    fetchSalesRecord();
    fetchWeeklyReport();
    fetchWeeklyTarget();
  }, [fetchSalesRecord, fetchWeeklyReport, fetchWeeklyTarget]);
}