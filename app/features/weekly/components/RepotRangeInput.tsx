import dayjs from 'dayjs';
import { getStartOfWeek, getEndOfWeek, isDateInRanges } from '@/utils/dateUtils';
import useDashboardStore from '@/store/dashboardStore';
import useWeeklyStore from '@/store/weeklyStore';
import WeekPicker from '../../../components/ui/WeekPicker';

export default function ReportRangeInput() {
  const { contentDateRange, setContentDateRange } = useWeeklyStore();
  const { registeredReportRanges } = useDashboardStore();

  const handleChange = (newValue: [Date | null, Date | null]) => {
    // 新しい週の範囲を計算してセットする
    if (newValue[0]) {
      const startOfWeek = getStartOfWeek(dayjs(newValue[0]).toDate())
      const endOfWeek = getEndOfWeek(dayjs(newValue[0]).toDate())
      setContentDateRange([startOfWeek, endOfWeek]);
    }
  };

  const maxDate = getEndOfWeek(new Date());

  const excludeDate = (date: Date) => {
    return isDateInRanges(date, registeredReportRanges);
  };

  return <WeekPicker value={contentDateRange} handleChange={handleChange} excludeDate={excludeDate} maxDate={maxDate}/>
}
