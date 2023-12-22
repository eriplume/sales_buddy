"use client"
import { useFetchData } from '@/lib/useFetchData';
import { useMemo } from 'react';
import { formatDate } from '@/utils/dateUtils';
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import SalesModal from './SalesModal';
import SalesIndicator from './SalesIndicator';

export default function Calender() {
  useFetchData();
  
  const [opened, { open, close }] = useDisclosure(false);
  const { selectedDate, setSelectedDate } = useCalculationStore();
  const { salesRecords } = useDashboardStore((state) => ({ salesRecords: state.salesRecords }));
  const { salesDates } = useDashboardStore((state) => ({ salesDates: state.salesDates }));


  const handleDateChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedDate(date);
    }
    open();
  };

  // 選択された日付に対応する売上記録を取得
  const selectedSalesRecord = useMemo(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate)
      return salesRecords.find((record) => record.date === formattedDate) || null;;
    }
    return null;
  }, [selectedDate, salesRecords]);

  const renderDay = (date: Date) => {
    return <SalesIndicator date={date} salesDates={salesDates} />;
  };

  return (
    <>
      <DatePicker allowDeselect onChange={handleDateChange} renderDay={renderDay} maxDate={new Date()}/>
      <SalesModal 
        opened={opened}
        close={close}
        selectedSalesRecord={selectedSalesRecord}
        selectedDate={selectedDate}
      />
    </>
  );
}