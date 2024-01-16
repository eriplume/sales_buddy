"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';

export const useFetch = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);
  useEffect(() => {
    fetchSalesRecord();
    fetchOptions();
  }, [fetchSalesRecord,fetchOptions]);
}