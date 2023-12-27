import { ResisteredDateRange } from '@/types';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

// Date型で受け取る
export const formatDate = (date :Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const formatDateYM = (date :Date | null ) => {
  return dayjs(date).format('YYYY-MM');
};

export const formatDateLayout = (date :Date) => {
  return dayjs(date).format("YYYY / MM / DD   ( ddd )");
};

export const getStartOfWeek = (date :Date) => {
  return dayjs(date).startOf('isoWeek').toDate();
}

export const getEndOfWeek = (date :Date) => {
  return dayjs(date).endOf('isoWeek').toDate();
}

export const getTargetDateRange = (): [Date, Date] => {
  const todayPlusTwoDays = dayjs().add(3, 'day').toDate();
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

export const isDateInRanges = (date: Date, ranges: ResisteredDateRange[]): boolean => {
  const checkDate = dayjs(date);

  return ranges.some(range => {
    const startDate = dayjs(range.startDate);
    const endDate = dayjs(range.endDate);
    return checkDate.isAfter(startDate.subtract(1, 'day')) && checkDate.isBefore(endDate.add(1, 'day'));
  });
};

// 今週の開始日と終了日を取得する関数
export const getThisWeekRange = () => {
  const start = formatDate(getStartOfWeek(new Date()));
  const end = formatDate(getEndOfWeek(new Date()));
  return { start, end };
};

// string型で受け取る
export const getWeekHead = (date :string) => {
  return dayjs(date).startOf('isoWeek').format('MM / DD');
}

export const getweekEndDate = (date :string) => {
  return dayjs(date).add(6, 'day').format('MM / DD');
}

export const formatDateMD = (date :string) => {
  return dayjs(date).format("MM/DD");
};

export const sortData = (data: Record<string, any>) => {
  return Object.keys(data).sort((a, b) => dayjs(a).diff(dayjs(b)))
}