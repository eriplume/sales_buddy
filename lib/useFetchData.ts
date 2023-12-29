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

export const useFetchForCalculator = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);
  useEffect(() => {
    fetchSalesRecord();
    fetchOptions();
  }, [fetchSalesRecord,fetchOptions]);
}

export const useFetchJobs = () => {
  const fetchJobsRecord = useDashboardStore((state) => state.fetchJobsRecord);
  useEffect(() => {
    fetchJobsRecord();
  }, [fetchJobsRecord]);
}

export const useFetchForCustomersGraph = () => {
  const fetchCustomersRecord = useDashboardStore((state) => state.fetchCustomersRecord);
  const fetchOptions = useCalculationStore((state) => state.fetchOptions); 
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  useEffect(() => {
    fetchOptions();
    fetchCustomersRecord();
    fetchSalesRecord();
  }, [fetchCustomersRecord, fetchOptions, fetchSalesRecord])
}

export const useFetchForArchive = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  useEffect(() => {
    fetchSalesRecord();
  }, [fetchSalesRecord]);
}

export const useFetchForWeekly = () => {
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchWeeklyTarget = useDashboardStore((state) => state.fetchWeeklyTarget);
  useEffect(() => {
    fetchSalesRecord();
    fetchWeeklyReport();
    fetchWeeklyTarget();
  }, [fetchSalesRecord, fetchWeeklyReport, fetchWeeklyTarget]);
}