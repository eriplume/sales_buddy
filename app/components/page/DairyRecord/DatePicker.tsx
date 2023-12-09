"use client"
import { DatePickerInput } from '@mantine/dates';
import { rem } from '@mantine/core';
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import dayjs from 'dayjs';

export default function Datepicker() {
  const [value, setValue] = useState<Date | null>(null)
  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  return (
    <DatePickerInput
      leftSection={icon}
      leftSectionPointerEvents="none"
      size="xs"
      value={value}
      onChange={setValue}
      withAsterisk
      valueFormat= "YYYY / MM / DD   ( ddd )"
      maxDate={new Date()}
    />
  );
}
