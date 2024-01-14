'use client'
import { getThisWeekRange, formatDateMD } from "@/utils/dateUtils";
import useDashboardStore from "@/store/dashboardStore";
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Modal } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/outline";
import AchievementsDetail from "./AchievementsDetail";

export default function Achievements() {
  const { thisWeekTarget, thisWeekAmount, thisWeekNumber, thisWeekCount, thisWeekSet, thisWeekAverage } = useDashboardStore();
  const { progressPercent, progress } = useDashboardStore((state) => state.getThisWeekProgress());
  const [opened, { open, close }] = useDisclosure(false);

  const modalTitle = () => {
    const { start, end } = getThisWeekRange();
      return (
        <>
          <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 pl-1 text-xl font-bold text-gray-700'>
            <div className='flex w-full mr-12 ml-4 items-center'>
              <CalendarIcon className="w-8 h-8 text-sky-800 mr-2" />
              {formatDateMD(start)} 〜 {formatDateMD(end)}
            </div>
          </div>
        </>
      );
  };

  return (
    <div className="flex space-y-3 w-full mx-auto">
      <div className="flex w-full p-2 mx-auto justify-start md:justify-center">
        <div className='flex flex-col md:flex-row w-60 md:w-full h-18 md:h-10 items-start md:items-center'>     
          <div className='flex flex-row items-center text-sm text-gray-700'>
            <div className="mr-1">今週の目標達成率:</div>
            <div className="text-lg font-bold text-blue-400">
              {progressPercent.toFixed(1)}
            </div>
            <div className="mr-3 ml-1">%</div>
          </div>
          <div className='flex flex-row items-center text-sm text-gray-700'>
            <div className="md:pl-2 md:border-l border-gray-400">詳しい実績をみる</div>
            <div className="ml-2">
              <ActionIcon
                variant="outline"
                size="lg"
                color="#e2e8f0"
                aria-label="Settings" 
                className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform"
                onClick={open}
              >
                <CursorArrowRaysIcon className="w-8 h-8 p-1 text-blue-300 hover:text-sky-700"/>
              </ActionIcon>
            </div>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} title={modalTitle()} centered >
        <AchievementsDetail
          target={thisWeekTarget}
          amount={thisWeekAmount}
          number={thisWeekNumber}
          count={thisWeekCount}
          set={thisWeekSet}
          average={thisWeekAverage}
          progressPercent={progressPercent}
          progress={progress}
        />
      </Modal>
    </div>
  )
}
