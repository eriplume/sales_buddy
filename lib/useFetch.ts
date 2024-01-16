"use client"
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';

export const useFetchData = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchWeeklyTarget = useDashboardStore((state) => state.fetchWeeklyTarget);
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);
  const fetchCustomersRecord = useDashboardStore((state) => state.fetchCustomersRecord);
  useEffect(() => {
    fetchSalesRecord();
    fetchWeeklyReport();
    fetchWeeklyTarget();
    fetchOptions();
    fetchCustomersRecord();
  }, [fetchSalesRecord, fetchWeeklyTarget, fetchWeeklyReport, fetchOptions, fetchCustomersRecord]);
}



export const useFetchJobs = () => {
  const fetchJobsRecord = useDashboardStore((state) => state.fetchJobsRecord);
  useEffect(() => {
    fetchJobsRecord();
  }, [fetchJobsRecord]);
}







export const useFetchForDemo = () => {
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);
  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);
}