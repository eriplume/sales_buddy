import useDashboardStore from "@/store/dashboardStore";
import { PencilIcon } from '@heroicons/react/24/outline';
import ReportRangeInput from './RepotRangeInput';
import ReportInputForm from './ReportInput';
import ThisWeekAchievements from './ThisWeekAchievements';
import HelpMordal from '../../../components/ui/HelpMordal';
import HelpPage from './HelpPage';

export default function ReportStep() {
  const { thisWeekTarget, thisWeekAmount, thisWeekNumber, thisWeekCount, thisWeekSet, thisWeekAverage } = useDashboardStore();
  const { progressPercent, progress } = useDashboardStore((state) => state.getThisWeekProgress());

  return (
    <div className="flex flex-col w-full max-w-lg bg-white px-10 py-6 shadow-sm rounded">
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
        <ReportRangeInput />
      </div>
      <ThisWeekAchievements target={thisWeekTarget} amount={thisWeekAmount} number={thisWeekNumber} count={thisWeekCount} set={thisWeekSet} average={thisWeekAverage} progress={progress} progressPercent={progressPercent}/>
      <div className="flex flex-row justify-center items-center w-full mt-3">
        <div className="flex w-full py-2 justify-center">
          <div className="w-full">
            <ReportInputForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
