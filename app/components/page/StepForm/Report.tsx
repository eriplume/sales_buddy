import ReportRangeInput from '../WeeklyReport.tsx/RepotRangeInput';
import ReportInputForm from '../WeeklyReport.tsx/ReportInput';
import WeekRecordHoverCard from '../WeeklyReport.tsx/WeekRecordHover';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function Report() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">

      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <PencilIcon className="w-5 h-5 text-gray-500 mr-2"/>
        <span className="mx-1 text-sm text-gray-500">今週の振り返りを入力</span>
      </div>
      
      <div className="flex space-y-3 w-full p-2 mx-auto">
        <ReportRangeInput />
      </div>

      <div className="flex space-y-3 w-full mx-auto">
        <div className="flex w-full p-2 mx-auto justify-start md:justify-center">
          <div className='flex flex-col md:flex-row w-60 md:w-full h-18 md:h-10 items-start md:items-center'>
            
            <div className='flex flex-row items-center text-sm text-gray-500'>
              <div className="mr-1">
                予算達成率:
              </div>
              <div className="text-lg text-gray-800">
                100
              </div>
              <div className="mr-3 ml-1">
                %
              </div>
            </div>

            <div className='flex flex-row items-center text-sm text-gray-500'>
              <div className="md:pl-2 md:border-l border-gray-400">
                詳しい実績を見る
              </div>
              <div className="ml-2">
                <WeekRecordHoverCard />
              </div>
            </div>

          </div>
        </div>
      </div>

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
