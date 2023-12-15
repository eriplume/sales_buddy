import { formatDate } from '@/utils/dateUtils';
import { Indicator } from '@mantine/core';

type SalesIndicatorProps = {
    date: Date;
    salesDates: string[];
};

export default function SalesIndicator({ date, salesDates }:SalesIndicatorProps ) {
  const dateString = formatDate(date)
  const isSaleDay = salesDates.includes(dateString);

  return (
    <Indicator size={6} color="#93c5fd" offset={-5} disabled={!isSaleDay}>
      {date.getDate()}
    </Indicator>
  )
}
