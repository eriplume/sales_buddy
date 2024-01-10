import dayjs from 'dayjs';
import { getStartOfWeek, getEndOfWeek, isDateInRanges } from '@/utils/dateUtils';
import { registeredReportRangesDemo } from './DemoData';
import useWeeklyStore from '@/store/weeklyStore';
import { PencilIcon } from '@heroicons/react/24/outline';
import ReportInputForm from '../WeeklyReport.tsx/ReportInput';
import HelpMordal from '../../ui/HelpMordal';
import HelpPage from '../StepForm/HelpPage';
import DemoArchive from './DemoArchive';
import WeekPicker from '../../ui/WeekPicker';

export default function DemoReportStep() {
  const { contentDateRange, setContentDateRange } = useWeeklyStore();

  const handleChange = (newValue: [Date | null, Date | null]) => {
    if (newValue[0]) {
      const startOfWeek = getStartOfWeek(dayjs(newValue[0]).toDate())
      const endOfWeek = getEndOfWeek(dayjs(newValue[0]).toDate())
      setContentDateRange([startOfWeek, endOfWeek]);
    }
  };

  const maxDate = getEndOfWeek(new Date());

  const excludeDate = (date: Date) => {
    return isDateInRanges(date, registeredReportRangesDemo);
  };

  return (
    <div className="flex flex-col w-full max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">
      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <PencilIcon className="w-6 h-6 text-gray-500 mr-2"/>
        <span className="mx-1 mb-1 text-sm text-gray-700">今週の振り返りを入力</span>
      </div>
      <div className='flex justify-end'>
        <HelpMordal>
          <HelpPage/>
        </HelpMordal>
      </div>
      <div className="flex space-y-3 w-full px-1">
        <WeekPicker value={contentDateRange} handleChange={handleChange} excludeDate={excludeDate} maxDate={maxDate}/>
      </div>
      <DemoArchive />
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex w-full py-2 justify-center">
          <div className="w-full h-48 overflow-auto">
            <ReportInputForm />
          </div>
        </div>
      </div>
    </div>
  )
}
