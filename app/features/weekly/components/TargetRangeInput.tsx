import dayjs from 'dayjs';
import { getStartOfWeek, getEndOfWeek, isDateInRanges } from '@/utils/dateUtils';
import useDashboardStore from '@/store/dashboardStore';
import useWeeklyStore from '@/store/weeklyStore';
import WeekPicker from '../../../components/ui/WeekPicker';

export default function TargetRangeInput() {

  const { targetDateRange, setTargetDateRange } = useWeeklyStore();
  const { registeredTargetRanges } = useDashboardStore((state) => ({ registeredTargetRanges: state.registeredTargetRanges }));

  const handleChange = (newValue: [Date | null, Date | null]) => {
    // 新しい週の範囲を計算してセットする
    if (newValue[0]) {
      const startOfWeek = getStartOfWeek(dayjs(newValue[0]).toDate())
      const endOfWeek = getEndOfWeek(dayjs(newValue[0]).toDate())
      setTargetDateRange([startOfWeek, endOfWeek]);
    }
  };

  const excludeDate = (date: Date) => {
    return isDateInRanges(date, registeredTargetRanges);
  };

  return <WeekPicker value={targetDateRange} handleChange={handleChange} excludeDate={excludeDate}/>
}