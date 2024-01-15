"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';

export const useFetch = () => {
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchMonthlyReport = useDashboardStore((state) => state.fetchMonthlyReport);
  useEffect(() => {
    fetchWeeklyReport();
    fetchMonthlyReport();
  }, [fetchWeeklyReport, fetchMonthlyReport]);
}