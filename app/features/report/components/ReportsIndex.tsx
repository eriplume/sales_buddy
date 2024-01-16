"use client"
import { useState } from "react";
import Link from "next/link";
import { formatDateYM } from "@/utils/dateUtils";
import useDashboardStore from "@/store/dashboardStore";
import { TriangleIcon } from "../../../components/ui/icon/Triangle"
import MonthPicker from "../../../components/ui/MonthPicker"
import WeekList from "./WeekList";
import CreateSummary from "./CreateSummary";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import HelpMordal from "../../../components/ui/HelpMordal";
import HelpPage from "./HelpPage";
import MonthlySummary from "./MonthlySummary";
import { useFetch } from "../hooks/useReport";

export default function ReportsIndex() {
  useFetch();

  const { weeklyReports, monthlyReports } = useDashboardStore();
  const [value, setValue] = useState<Date | null>(new Date());

  const targetMonth = formatDateYM(value);

  const filteredWeeklyReports = weeklyReports.filter(report => {
    const reportMonth = report.start_date.substring(0, 7); 
    return reportMonth === targetMonth;
  });

  const selectedMonthReport = monthlyReports.find(report => report.month === targetMonth);

  return (
    <div className="flex flex-col justify-center w-full max-w-lg pt-4 pb-7 md:py-7 bg-white rounded-md">

      <div className='flex justify-end pr-5 pb-2'>
        <Link href='/weekly' className='flex flex-row text-gray-600 text-sm items-center underline hover:text-sky-800 cursor-pointer'>
          <div>週間レポートの登録はこちら</div>
          <ArrowRightCircleIcon className="w-4 h-4 mr-1" />
        </Link>
      </div>

      <div className="flex flex-row justify-start px-7 pt-2 md:px-12">
        <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
        <div className='text-sm text-gray-800'>月を選択</div>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-5 md:px-12"> 
        <div className="w-full items-center max-w-md px-3 py-2">
          <MonthPicker value={value} setValue={setValue} />
        </div>
      </div>

      <div className="flex flex-row justify-start px-7 pt-5 pb-2 md:px-12">
        <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
        <div className='text-sm text-gray-800'>各週のデータ</div>
      </div>

      <WeekList reportsList={filteredWeeklyReports} />

      {selectedMonthReport ? (
        <>
          <div className="flex flex-row justify-start px-7 pt-6 pb-4 md:px-12 items-center">
            <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
            <div className='text-sm text-gray-800 mr-2'>月間まとめ</div>
          </div>
          <MonthlySummary content={selectedMonthReport.content} id={selectedMonthReport.id}/>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-start px-7 pt-6 pb-4 md:px-12 items-center">
            <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
            <div className='text-sm text-gray-800 mr-2'>月間レポートを作成しますか？</div>
            <HelpMordal>
              <HelpPage/>
            </HelpMordal>
          </div>
          <CreateSummary reportsList={filteredWeeklyReports} targetMonth={targetMonth}/>
        </>
      )}
      
    </div>  
  )
}
