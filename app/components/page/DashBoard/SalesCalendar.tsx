"use client"
import { useMemo } from 'react';
import { useFetchData } from '@/lib/useFetch';
import { formatDate } from '@/utils/dateUtils';
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import CalendarIndicator from '../../ui/CalendarIndicator';
import DayRecord from './DayRecord';
import NotDayRecord from './NotDayRecord';
import CalendarModal from './CalendarModal';

export default function SalesCalender() {
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

  const renderModalContent = () => {
    return selectedSalesRecord ? <DayRecord record={selectedSalesRecord} /> : <NotDayRecord path="/dairyrecord"/>;
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
    return <CalendarIndicator date={date} rendarDate={salesDates} color="#93c5fd"/>;
  };

  return (
    <>
      <DatePicker allowDeselect onChange={handleDateChange} renderDay={renderDay} maxDate={new Date()} value={null}/>
      <CalendarModal 
        opened={opened}
        close={close}
        selectedDate={selectedDate}
        renderModalContent={renderModalContent}
        size="auto"
      />
    </>
  );
}