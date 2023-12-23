'use client'
import useDashboardStore from "@/store/dashboardStore";
import WeekRecordHoverCard from '../WeeklyReport.tsx/WeekRecordHover';

export default function Achievements() {

  const { progress, progressPercent } = useDashboardStore((state) => state.getThisWeekProgress());

  return (
    <div className="flex space-y-3 w-full mx-auto">
    <div className="flex w-full p-2 mx-auto justify-start md:justify-center">
      <div className='flex flex-col md:flex-row w-60 md:w-full h-18 md:h-10 items-start md:items-center'>
        
        <div className='flex flex-row items-center text-sm text-gray-700'>
          <div className="mr-1">
            予算達成率:
          </div>
          <div className="text-lg font-bold text-sky-800">
            {progressPercent.toFixed(1)}
          </div>
          <div className="mr-3 ml-1">
            %
          </div>
        </div>

        <div className='flex flex-row items-center text-sm text-gray-700'>
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
  )
}
