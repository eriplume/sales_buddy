import { targetDemo, progressDemo, thisWeekAmountDemo, progressPercentDemo } from "@/const/demoData";
import { formatCurrency } from "@/utils/currencyUtils";
import { ForwardIcon } from "@heroicons/react/24/outline";
import WeeklyRingProgress from "@/app/features/weekProgress/components/WeeklyRingProgress";
import WeeklyProgress from "@/app/features/weekProgress/components/WeeklyProgress";
import { ContentsLinkDemo } from "@/app/features/dashboard/components/ContentsLink";

export default function DemoProgressArea() {
  return (
    <div className="flex flex-col w-full max-w-lg mb-5 pb-2">
      <div className="flex flex-col justify-center items-center p-7">
        <div className="flex flex-row items-center">
          <WeeklyRingProgress value={progressPercentDemo}/>
          <WeeklyProgress target={targetDemo} amount={thisWeekAmountDemo}/>
        </div>
        <div className="flex items-end text-md text-gray-700 mt-2">
          <div className="flex flex-row items-end">
            <ForwardIcon className="w-8 h-8 text-sky-800 mr-2"/>
            <div className="hidden md:block">目標達成まで残り... </div>
            <div className="md:hidden">目標まで残り... </div>
            <div className="text-2xl font-bold">{formatCurrency(progressDemo)}</div>
          </div>
        </div>
      </div>
      <ContentsLinkDemo />
    </div>
  )
}
