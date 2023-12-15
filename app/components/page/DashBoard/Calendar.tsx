"use client"

import { useMemo } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import { Modal } from '@mantine/core';
import { Indicator } from '@mantine/core';
import dayjs from 'dayjs';
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import DayRecord from './DayRecord';
import NotDayRecord from './NotDayRecord';

export default function Calender() {
  const [opened, { open, close }] = useDisclosure(false);
  const { selectedDate, setSelectedDate } = useCalculationStore();
  const { salesRecords } = useDashboardStore((state) => ({ salesRecords: state.salesRecords }));


  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    open(); // モーダルを開く
  };

  // 選択された日付に対応する売上記録を取得
  const selectedSalesRecord = useMemo(() => {
    if (selectedDate) {
      // dayjsを使って日付をフォーマット
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
      return salesRecords.find((record) => record.date === formattedDate);
    }
    return null;
  }, [selectedDate, salesRecords]);

  // モーダルの中身を決定する関数
  const renderModalContent = () => {
  if (selectedSalesRecord) {
    return <><DayRecord record={selectedSalesRecord} /></>;
  } else {
    return <><NotDayRecord /></>;
  }
};

  return (
    <>
    <DatePicker allowDeselect onChange={handleDateChange} />

    <Modal
        opened={opened}
        onClose={close}
        centered
      >
        {renderModalContent()}
    </Modal>
    </>
  );
}