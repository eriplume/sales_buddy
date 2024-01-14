"use client"
import { DatePickerInput } from '@mantine/dates';
import { rem } from '@mantine/core';
import { CalendarIcon } from "@heroicons/react/24/outline";

type WeekPickerProps = {
  value: [Date, Date];
  handleChange: (newValue: [Date | null, Date | null]) => void;
  excludeDate: (date: Date) => boolean;
  maxDate?: Date;
};

export default function WeekPicker({ value, excludeDate, handleChange, maxDate }:WeekPickerProps) {

  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  return (
    <>
      <DatePickerInput
        leftSection={icon}
        label="週の選択"
        type="range"
        size="xs"
        placeholder="Pick dates range"
        valueFormat= "MM / DD   (ddd)"
        value={value}
        onChange={handleChange}
        withAsterisk
        className='w-full'
        excludeDate={excludeDate}
        maxDate={maxDate}
      />
  </>
  );
}

