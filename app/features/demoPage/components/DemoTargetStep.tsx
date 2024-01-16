import dayjs from 'dayjs';
import { getStartOfWeek, getEndOfWeek, isDateInRanges } from '@/utils/dateUtils';
import useWeeklyStore from '@/store/weeklyStore';
import { registeredTargetRangesDemo } from "@/const/demoData";
import { FireIcon } from '@heroicons/react/24/outline';
import TargetInputForm from '@/app/features/weekly/components/TargetInputForm';
import WeekPicker from '../../../components/ui/WeekPicker';

export default function DemoTargetStep() {
  const { targetDateRange, setTargetDateRange } = useWeeklyStore();

  const handleChange = (newValue: [Date | null, Date | null]) => {
    if (newValue[0]) {
      const startOfWeek = getStartOfWeek(dayjs(newValue[0]).toDate())
      const endOfWeek = getEndOfWeek(dayjs(newValue[0]).toDate())
      setTargetDateRange([startOfWeek, endOfWeek]);
    }
  };

  const excludeDate = (date: Date) => {
    return isDateInRanges(date, registeredTargetRangesDemo);
  };

  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded"> 
      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <FireIcon className="w-6 h-6 text-gray-500 mr-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <span className="mx-1 text-sm text-gray-700">次週の目標を入力</span>
      </div>
      <div className="flex space-y-4 w-full p-2 mx-auto">
        <WeekPicker value={targetDateRange} handleChange={handleChange} excludeDate={excludeDate}/>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex w-full p-2 mx-aut justify-center">
          <div className="w-60 md:w-full overflow-auto">
            <TargetInputForm />
          </div>
        </div>
      </div>
    </div>
  )
}
