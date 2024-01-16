"use client"
import useCalculationStore from '@/store/calculationStore';
import { formatDate } from '@/utils/dateUtils';
import { DatePickerInput } from '@mantine/dates';
import { rem } from '@mantine/core';
import { CalendarIcon } from "@heroicons/react/24/outline";

type DatepickerProps = {
  salesDates : string[];
}

export default function Datepicker({salesDates}: DatepickerProps ) {
  const { count, selectedDate, setSelectedDate } = useCalculationStore();

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
