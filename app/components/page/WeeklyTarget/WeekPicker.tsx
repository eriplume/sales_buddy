"use client"
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { CalendarIcon } from "@heroicons/react/24/outline";
import { rem } from '@mantine/core';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

type InitialValueType =  [Date, Date];

export default function WeekPicker({ initialValue }: { initialValue: InitialValueType }) {
  const [value, setValue] = useState<[Date | null, Date | null]>(initialValue);

  const icon = <CalendarIcon style={{ width: rem(18), height: rem(18) }}/>;

  const handleChange = (newValue: [Date | null, Date | null]) => {
    // 新しい週の範囲を計算してセットする
    if (newValue[0]) {
      const startOfWeek = dayjs(newValue[0]).startOf('isoWeek').toDate();
      const endOfWeek = dayjs(newValue[0]).endOf('isoWeek').toDate();
      const newRange: [Date | null, Date | null] = [startOfWeek, endOfWeek];
      setValue(newRange);
    }
  };

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
      />
  </>
  );
}

