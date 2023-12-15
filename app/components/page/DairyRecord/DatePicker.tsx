"use client"
import useCalculationStore from '@/store/calculationStore';
import useDashboardStore from '@/store/dashboardStore';
import { DatePickerInput } from '@mantine/dates';
import { rem } from '@mantine/core';
import { CalendarIcon } from "@heroicons/react/24/outline";
import { formatDate } from '@/utils/dateUtils';

export default function Datepicker() {
  const { count, selectedDate, setSelectedDate } = useCalculationStore();
  const { salesDates } = useDashboardStore((state) => ({ salesDates: state.salesDates }));

  const isDataEntered = count !== 0;

  const excludeDate = (date: Date) => {
    const formattedDate = formatDate(date);
    return salesDates.includes(formattedDate);
  };

  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <DatePickerInput
      leftSection={icon}
      leftSectionPointerEvents="none"
      size="xs"
      onChange={handleDateChange}
      value={selectedDate}
      disabled={isDataEntered}
      valueFormat= "YYYY / MM / DD   ( ddd )"
      maxDate={new Date()}
      excludeDate={excludeDate}
    />
  );
}
