"use client"
import { useMemo } from 'react';
import { formatDate } from '@/utils/dateUtils';
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import SalesModal from './SalesModal';
import SalesIndicator from './SalesIndicator';

export default function Calender() {
  const [opened, { open, close }] = useDisclosure(false);
  const { selectedDate, setSelectedDate } = useCalculationStore();
  const { salesRecords } = useDashboardStore((state) => ({ salesRecords: state.salesRecords }));


  const handleDateChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedDate(date);
    }
    open(); // モーダルを開く
  };

  // 選択された日付に対応する売上記録を取得
  const selectedSalesRecord = useMemo(() => {
    if (selectedDate) {
      // dayjsを使って日付をフォーマット
      const formattedDate = formatDate(selectedDate)
      return salesRecords.find((record) => record.date === formattedDate);
    }
    return null;
  }, [selectedDate, salesRecords]);

  // 売上記録が存在する日付の配列を作成
  const salesDates = salesRecords.map(record => formatDate(record.date));

  // Calender.js 内での使用
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