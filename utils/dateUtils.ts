import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);


export const formatDate = (date :Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDateLayout = (date :Date) => {
  return dayjs(date).format("YYYY / MM / DD   ( ddd )");
};

export const formatDateMD = (date :string) => {
  return dayjs(date).format("MM/DD");
};

export const getStartOfWeek = (date :Date) => {
  return dayjs(date).startOf('isoWeek').toDate();
}

export const getEndOfWeek = (date :Date) => {
  return dayjs(date).endOf('isoWeek').toDate();
}

export const getTargetDateRange = (): [Date, Date] => {
  const todayPlusTwoDays = dayjs().add(2, 'day').toDate();
  const startOfWeek = getStartOfWeek(todayPlusTwoDays)
  const endOfWeek = getEndOfWeek(todayPlusTwoDays)

  return [startOfWeek, endOfWeek];
};

export const getReportDateRange = (): [Date, Date] => {
  const todayMinusFourDays = dayjs().subtract(4, 'day').toDate();
  const startOfWeek = getStartOfWeek(todayMinusFourDays)
  const endOfWeek = getEndOfWeek(todayMinusFourDays)

  return [startOfWeek, endOfWeek];
};