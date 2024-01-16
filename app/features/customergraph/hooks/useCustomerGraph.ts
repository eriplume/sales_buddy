"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';

export const useFetch = () => {
    const fetchCustomersRecord = useDashboardStore((state) => state.fetchCustomersRecord);
    const fetchOptions = useCalculationStore((state) => state.fetchOptions); 
    const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
    useEffect(() => {
      fetchOptions();
      fetchCustomersRecord();
      fetchSalesRecord();
    }, [fetchCustomersRecord, fetchOptions, fetchSalesRecord])
  }