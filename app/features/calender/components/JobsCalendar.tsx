"use client"
import { useMemo, useState } from 'react';
import { formatDate } from '@/utils/dateUtils';
import useDashboardStore from '@/store/dashboardStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import CalendarIndicator from '../../../components/ui/CalendarIndicator';
import CalendarModal from './CalendarModal';
import JobRecord from './JobRecord';
import NotJobRecord from './NotJobRecord';

export default function JobsCalender() {  
  const [ opened, { open, close } ] = useDisclosure(false);
  const [ selectedDate, setSelectedDate ] = useState<Date | null>(null);
  const { jobsRecords } = useDashboardStore((state) => ({ jobsRecords: state.jobsRecords }));
  const { jobsDates } = useDashboardStore((state) => ({ jobsDates: state.jobsDates }));

  const closeAndDeselectDate = () => {
    setSelectedDate(null);
    close();
  };
  
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date !== null) {
      open();
    }
  };

  const selectedJobsRecords = useMemo(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);
      return jobsRecords.filter((record) => record.date === formattedDate);
    }
    return [];
  }, [selectedDate, jobsRecords]);
  
  const renderDay = (date: Date) => {
    return <CalendarIndicator date={date} rendarDate={jobsDates} color="#fef08a"/>;
  };

  const renderModalContent = () => {
    return selectedJobsRecords.length > 0 
      ? <JobRecord records={selectedJobsRecords} /> 
      : <NotJobRecord selectedDate={selectedDate} close={close} />;
  };
  
  return (
    <>
      <DatePicker allowDeselect onChange={handleDateChange} renderDay={renderDay} maxDate={new Date()} value={null}/>
      <CalendarModal
        opened={opened}
        close={closeAndDeselectDate}
        selectedDate={selectedDate}
        renderModalContent={renderModalContent}
        size="auto"
      />
    </>
  );
}