import { Indicator } from '@mantine/core';
import dayjs from 'dayjs';

type SalesIndicatorProps = {
    date: Date;
    salesDates: string[];
};

export default function SalesIndicator({ date, salesDates }:SalesIndicatorProps ) {
  const dateString = dayjs(date).format('YYYY-MM-DD');
  const isSaleDay = salesDates.includes(dateString);

  return (
    <Indicator size={5} color="rgba(87, 147, 250, 0.38)" offset={-5} disabled={!isSaleDay}>
      {date.getDate()}
    </Indicator>
  )
}
