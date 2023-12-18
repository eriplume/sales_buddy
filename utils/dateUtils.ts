import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);


export const formatDate = (date :Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDateLayout = (date :Date) => {
  return dayjs(date).format("YYYY / MM / DD   ( ddd )");
};

export const getTargetDateRange = (): [Date, Date] => {
  const today = dayjs();
  const todayPlusTwoDays = today.add(2, 'day');
  const startOfWeek = todayPlusTwoDays.startOf('isoWeek').toDate();
  const endOfWeek = todayPlusTwoDays.endOf('isoWeek').toDate();

  return [startOfWeek, endOfWeek];
};