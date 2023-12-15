"use client"

import { useState,useMemo } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import { Modal } from '@mantine/core';
import { Indicator } from '@mantine/core';
import dayjs from 'dayjs';

export default function Calender() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
    <DatePicker allowDeselect value={value} onChange={setValue} />
    </>
  );
}