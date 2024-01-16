"use client"
import { useEffect } from 'react';
import useCalculationStore from '@/store/calculationStore';

export const useFetch = () => {
  const fetchOptions = useCalculationStore((state) => state.fetchOptions);
  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);
}