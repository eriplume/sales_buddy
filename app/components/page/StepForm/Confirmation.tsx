import useWeeklyStore from '@/store/weeklyStore';
import { formatDateMD } from '@/utils/dateUtils';
import { CheckBadgeIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function Confirmation() {

  const { target, getWeeklyReportData, getWeeklyTargetData } = useWeeklyStore();
  const weeklyReportData = getWeeklyReportData();
  const weeklyTargetData = getWeeklyTargetData();

  const reportStartDate = formatDateMD(weeklyReportData.weekly_report.start_date)
  const reportEndDate = formatDateMD(weeklyReportData.weekly_report.end_date)
  const targetStartDate = formatDateMD(weeklyTargetData.weekly_target.start_date)
  const targetEndDate = formatDateMD(weeklyTargetData.weekly_target.end_date)

  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">

      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <CheckBadgeIcon className="w-6 h-6 text-gray-500 mr-2"/>
        <span className="mx-1 text-sm text-gray-700">入力内容を確認して登録</span>
      </div>
      
      <div className="flex flex-row justify-center items-center w-full py-2">
        <div className="flex flex-col w-full p-2 mx-auto justify-center">
          <div className='flex flex-row ml-1 items-center mb-2'>
            <div className='text-sm text-gray-700 mr-1'>週間レポート :</div>
            <CalendarIcon className="w-4 h-4 text-gray-500 mx-1"/>
            <div className='text-sm text-gray-700'>{reportStartDate} ~ {reportEndDate}</div>
          </div>
          <div className="bg-white border w-60 md:w-full h-32 overflow-auto text-xs p-2">
            {weeklyReportData.weekly_report.content}
          </div>
        </div>
      </div>

      <div className="flex space-y-4 w-full mx-auto">
        <div className="flex flex-col w-full p-2 mx-auto justify-center">
          <div className='flex flex-row ml-1 items-center'>
            <div className='text-sm text-gray-700 mr-1'>次週の目標 :</div>
            <CalendarIcon className="w-4 h-4 text-gray-500 mx-1"/>
            <div className='text-sm text-gray-700'>{targetStartDate} ~ {targetEndDate}</div>
          </div>
          <div className="bg-white w-60 md:w-full h-10 text-sm p-2">
              <div className="text-xl text-gray-800">
                {target} 万
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}