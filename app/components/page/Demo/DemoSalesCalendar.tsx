"use client"
import { useMemo } from 'react';
import { salesRecordsDemo, salesDatesDemo } from './DemoData';
import { formatDate } from '@/utils/dateUtils';
import useCalculationStore from '@/store/calculationStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import CalendarIndicator from '../../ui/CalendarIndicator';
import CalendarModal from '../DashBoard/CalendarModal';
import DayRecord from '../DashBoard/DayRecord';
import NotDayRecord from '../DashBoard/NotDayRecord';

export default function DemoSalesCalendar() {

  const [opened, { open, close }] = useDisclosure(false);
  const { selectedDate, setSelectedDate } = useCalculationStore();

  const handleDateChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedDate(date);
    }
    open();
  };

  const renderModalContent = () => {
    return selectedSalesRecord ? <DayRecord record={selectedSalesRecord} /> : <NotDayRecord path="/sample/dairyrecord"/>;
  };

  const selectedSalesRecord = useMemo(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate)
      return salesRecordsDemo.find((record) => record.date === formattedDate) || null;;
    }
    return null;
  }, [selectedDate]);

  const renderDay = (date: Date) => {
    return <CalendarIndicator date={date} rendarDate={salesDatesDemo} color="#93c5fd"/>;
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