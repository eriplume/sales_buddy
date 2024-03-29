import useWeeklyStore from '@/store/weeklyStore';
import { formatDateMD } from '@/utils/dateUtils';
import { CheckBadgeIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function ConfirmationStep() {
  const { target, getWeeklyReportData, getWeeklyTargetData } = useWeeklyStore();
  const { weekly_report } = getWeeklyReportData();
  const { weekly_target } = getWeeklyTargetData();

  const reportStartDate = formatDateMD(weekly_report.start_date)
  const reportEndDate = formatDateMD(weekly_report.end_date)
  const targetStartDate = formatDateMD(weekly_target.start_date)
  const targetEndDate = formatDateMD(weekly_target.end_date)

  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">
      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <CheckBadgeIcon className="w-6 h-6 text-gray-500 mr-2"/>
        <span className="mx-1 text-sm text-gray-700">入力内容を確認して登録</span>
      </div>
      <div className="flex flex-row justify-center items-center w-full py-2">
        <div className="flex flex-col w-full py-2 justify-center">
          <div className='flex flex-row ml-1 items-center mb-2'>
            <div className='text-sm text-gray-700 mr-1'>週間レポート :</div>
            <CalendarIcon className="w-4 h-4 text-gray-500 mx-1"/>
            <div className='text-sm text-gray-700'>{reportStartDate} ~ {reportEndDate}</div>
          </div>
          <div className="bg-white border md:w-full text-xs lg:text-sm p-2 h-32 overflow-auto">
            {weekly_report.content}
          </div>
        </div>
      </div>
      <div className="flex space-y-4 w-full mx-auto">
        <div className="flex flex-col w-full p-2 mx-auto justify-center">
          <div className='flex flex-row ml-1 items-center'>
            <div className='text-sm text-gray-700 mr-1'>
              次週の目標 :
            </div>
            {target !== 0 && (
              <div className='flex flex-row'>
                <CalendarIcon className="w-4 h-4 text-gray-500 mx-1"/>
                <div className='text-sm text-gray-700'>{targetStartDate} ~ {targetEndDate}</div>
              </div>
            )}
          </div>
          <div className="bg-white w-60 md:w-full h-10 text-sm p-2">
          {target !== 0 ? (
            <div className="text-xl text-gray-800">
              {target} 万
            </div>
          ):(
            <div className="text-lg text-gray-800">
              登録をスキップします
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}