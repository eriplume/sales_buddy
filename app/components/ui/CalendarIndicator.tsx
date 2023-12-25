import { formatDate } from '@/utils/dateUtils';
import { Indicator } from '@mantine/core';

type JobsIndicatorProps = {
  date: Date;
  rendarDate: string[];
  color: string;
};

export default function CalendarIndicator({ date, rendarDate, color }:JobsIndicatorProps ) {
  const dateString = formatDate(date)
  const isSaleDay = rendarDate.includes(dateString);

  return (
    <Indicator size={6} color={color} offset={-5} disabled={!isSaleDay} position="top-center">
      {date.getDate()}
    </Indicator>
  )
}