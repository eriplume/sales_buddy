"use client"
import { useState } from "react";
import Link from "next/link";
import { formatDateYM } from "@/utils/dateUtils";
import { weeklyReportsDemo, monthlyReportsDemo } from "@/const/demoData";
import { showErrorNotification } from "@/utils/notifications";
import { Button } from "@mantine/core";
import { PaperAirplaneIcon, ArrowRightCircleIcon  } from "@heroicons/react/24/outline";
import { TriangleIcon } from "../../ui/icon/Triangle"
import HelpMordal from "../../ui/HelpMordal";
import HelpPage from "../Report/HelpPage";
import MonthPicker from "../../ui/MonthPicker";
import ReportList from "../Report/ReportList";
import MonthlySummary from "../Report/MonthlySummary";

export default function DemoReportArchive() {
  const [value, setValue] = useState<Date | null>(new Date());
  const targetMonth = formatDateYM(value);

  const filteredWeeklyReports = weeklyReportsDemo.filter(report => {
    const reportMonth = report.start_date.substring(0, 7); 
    return reportMonth === targetMonth;
  });
  
  const selectedMonthReport = monthlyReportsDemo.find(report => report.month === targetMonth);

  const handleSubmit = () => {
    filteredWeeklyReports.length >= 3 
    ?  showErrorNotification('ログインが必要です')
    :  showErrorNotification('レポートが３週分以上必要です')
  }
  
  return (
    <div className="flex flex-col justify-center w-full max-w-lg pt-4 pb-7 md:py-7 bg-white rounded-md">
      <div className='flex justify-end pr-5 pb-2'>
        <Link href='/sample/weekly' className='flex flex-row text-gray-600 text-sm items-center underline hover:text-sky-800 cursor-pointer'>
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
      <ReportList reportsList={filteredWeeklyReports} />
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

          <div className="flex flex-col justify-center items-center px-7 md:px-12">
            <div className="flex flex-row justify-center items-center px-7 md:px-12">
              <Button 
                variant="outline" 
                color="#9ca3af" 
                className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform"
                onClick={handleSubmit}
              >
                Create
                <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
              </Button>
            </div>
          </div>
        </>
      )}  
    </div>  
  )
}