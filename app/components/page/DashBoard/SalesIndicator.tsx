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
    <Indicator size={5} color="rgba(87, 147, 250, 0.38)" offset={-5} disabled={!isSaleDay}>
      {date.getDate()}
    </Indicator>
  )
}
