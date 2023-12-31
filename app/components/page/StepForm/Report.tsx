import ReportRangeInput from '../WeeklyReport.tsx/RepotRangeInput';
import ReportInputForm from '../WeeklyReport.tsx/ReportInput';
import { PencilIcon } from '@heroicons/react/24/outline';
import Achievements from './Achievements';
import HelpMordal from '../../ui/HelpMordal';
import HelpPage from './HelpPage';

export default function Report() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">

      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <PencilIcon className="w-6 h-6 text-gray-500 mr-2"/>
        <span className="mx-1 mb-1 text-sm text-gray-700">今週の振り返りを入力</span>
      </div>
      
      <div className='flex justify-end'>
        <HelpMordal>
          <HelpPage/>
        </HelpMordal>
      </div>
  
      
      <div className="flex space-y-3 w-full px-2 mx-auto">
        <ReportRangeInput />
      </div>

      <Achievements/>

      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex w-full p-2 mx-aut justify-center">
          <div className="w-60 md:w-full h-48 overflow-auto">
            <ReportInputForm/>
          </div>
        </div>
      </div>
      
    </div>
  )
}
