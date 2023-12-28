"use client"
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import useCalculationStore from '@/store/calculationStore';

export const useFetchData = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchSalesRecord = useDashboardStore((state) => state.fetchSalesRecord);
  const fetchWeeklyReport = useDashboardStore((state) => state.fetchWeeklyReport);
  const fetchWeeklyTarget = useDashboardStore((state) => state.fetchWeeklyTarget);
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);

  useEffect(() => {
    if (railsUserId) {
      fetchSalesRecord(railsUserId);
      fetchWeeklyReport(railsUserId);
      fetchWeeklyTarget(railsUserId);
      fetchOptions();
    }
  }, [railsUserId, fetchSalesRecord, fetchWeeklyTarget, fetchWeeklyReport,fetchOptions]);
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

export const useFetchJobs = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchJobsRecord = useDashboardStore((state) => state.fetchJobsRecord);

  useEffect(() => {
    if (railsUserId) {
      fetchJobsRecord(railsUserId);
    }
  }, [railsUserId, fetchJobsRecord]);
}

export const useFetchCustomerRecords = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchCustomersRecord = useDashboardStore((state) => state.fetchCustomersRecord);
  
  useEffect(() => {
    if (railsUserId) {
      fetchCustomersRecord(railsUserId);
    }
  }, [railsUserId, fetchCustomersRecord])
}
