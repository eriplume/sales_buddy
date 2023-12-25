"use client"
import { useMemo, useState } from 'react';
import { useFetchJobs } from '@/lib/useFetchData';
import { formatDate } from '@/utils/dateUtils';
import useDashboardStore from '@/store/dashboardStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import CalendarIndicator from '../../ui/CalendarIndicator';
import CalendarModal from './CalendarModal';
import JobRecord from './JobRecord';

export default function JobsCalender() {
  useFetchJobs();
  
  const [opened, { open, close }] = useDisclosure(false);

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

  // 選択された日付に対応するJobを取得
  const selectedJobsRecord = useMemo(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate)
      return jobsRecords.find((record) => record.date === formattedDate) || null;;
    }
    return null;
  }, [selectedDate, jobsRecords]);
  
  const renderDay = (date: Date) => {
    return <CalendarIndicator date={date} rendarDate={jobsDates} color="#fef08a"/>;
  };

  const renderModalContent = () => {
    if (selectedJobsRecord) {
      return <JobRecord record={selectedJobsRecord} />;
      // return <p>業務記録</p>
    } else {
      return <p>登録フォーム</p>
    }
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