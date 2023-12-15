import dayjs from 'dayjs';

export const formatDate = (date :Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDateLayout = (date :Date) => {
  return dayjs(date).format("YYYY / MM / DD   ( ddd )");
};