"use client"
import { useMemo, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { formatDate } from '@/utils/dateUtils';
import { jobsRecordsDemo, jobsDatesDemo } from "@/const/demoData";
import { DatePicker } from '@mantine/dates';
import CalendarIndicator from '../../ui/CalendarIndicator';
import CalendarModal from '../DashBoard/CalendarModal';
import JobRecord from '../DashBoard/JobRecord';
import DemoNotJobRecord from './DemoNotJobRecord';

export default function DemoJobsCalendar() {
  const [ opened, { open, close } ] = useDisclosure(false);
  const [ selectedDate, setSelectedDate ] = useState<Date | null>(null);
  
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
        return jobsRecordsDemo.filter((record) => record.date === formattedDate);
      }
      return [];
    }, [selectedDate]);
    
    const renderDay = (date: Date) => {
      return <CalendarIndicator date={date} rendarDate={jobsDatesDemo} color="#fef08a"/>;
    };
  
    const renderModalContent = () => {
      return selectedJobsRecords.length > 0 
        ? <JobRecord records={selectedJobsRecords} /> 
        : <DemoNotJobRecord selectedDate={selectedDate} close={close} />;
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
