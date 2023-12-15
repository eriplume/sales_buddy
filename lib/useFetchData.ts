"use client"
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';

export const useFetchData = () => {
  const { data: session } = useSession();
  const railsUserId = session?.user?.railsId;
  const fetchData = useDashboardStore((state) => state.fetchData);

  useEffect(() => {
    if (railsUserId) {
      fetchData(railsUserId);
    }
  }, [railsUserId, fetchData]);
}
