'use client'
import { formatCurrency } from "@/utils/currencyUtils";
import useDashboardStore from "@/store/dashboardStore";
import WeeklyRingProgress from "./WeeklyRingProgress";
import WeeklyProgress from "./WeeklyProgress";
import { ForwardIcon } from "@heroicons/react/24/outline";

export default function ThisWeek() {

  const { thisWeekTarget, thisWeekAmount } = useDashboardStore();
  const { progress, progressPercent } = useDashboardStore((state) => state.getThisWeekProgress());

  const target = thisWeekTarget !== null ? thisWeekTarget / 10000 : 0;

    return (
      <>
        <div className="flex flex-col justify-center items-center p-7">
          <div className="flex flex-row items-center">
            <WeeklyRingProgress value={progressPercent}/>
            <WeeklyProgress target={target} amount={thisWeekAmount}/>
          </div>
          <div className="flex items-end text-md text-gray-700 mt-2">
            <div className="flex flex-row items-end">
              <ForwardIcon className="w-8 h-8 text-sky-800 mr-2"/>
              <div className="hidden md:block">目標達成まで残り... </div>
              <div className="md:hidden">目標まで残り... </div>
              {progress < 0 ? (
                <div className="text-2xl font-bold">{formatCurrency(0)}</div>
              ) : (
                <div className="text-2xl font-bold">{formatCurrency(progress)}</div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }