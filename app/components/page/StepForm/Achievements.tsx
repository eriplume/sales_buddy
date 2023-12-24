'use client'
import useDashboardStore from "@/store/dashboardStore";
import WeekRecordHoverCard from '../WeeklyReport.tsx/WeekRecordHover';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { ActionIcon, Button } from '@mantine/core';

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
          <div className="text-lg font-bold text-blue-400">
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
            <ActionIcon variant="white" size="lg" color="#60a5fa" aria-label="Settings" className="shadow-md hover:mt-1">
              <CursorArrowRaysIcon className="w-8 h-8 p-1"/>
            </ActionIcon>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}
