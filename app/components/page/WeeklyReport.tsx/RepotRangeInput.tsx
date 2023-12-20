import dayjs from 'dayjs';
import { getStartOfWeek } from '@/utils/dateUtils';
import { getEndOfWeek } from '@/utils/dateUtils';
import useWeeklyStore from '@/store/weeklyStore';
import WeekPicker from '../../ui/WeekPicker';

export default function ReportRangeInput() {

  const { contentDateRange, setContentDateRange } = useWeeklyStore();

  const handleChange = (newValue: [Date | null, Date | null]) => {
    // 新しい週の範囲を計算してセットする
    if (newValue[0]) {
      const startOfWeek = getStartOfWeek(dayjs(newValue[0]).toDate())
      const endOfWeek = getEndOfWeek(dayjs(newValue[0]).toDate())
      setContentDateRange([startOfWeek, endOfWeek]);
    }
  };

  return <WeekPicker value={contentDateRange} handleChange={handleChange} />
}
