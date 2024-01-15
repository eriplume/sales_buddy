"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';

export const useFetch = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  useEffect(() => {
    fetchSalesRecord();
  }, [fetchSalesRecord]);
}