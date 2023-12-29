"use client"
import { useState } from "react";
import { formatDateYM } from "@/utils/dateUtils";
import { useFetchForReport } from "@/lib/useFetchData";
import useDashboardStore from "@/store/dashboardStore";
import { TriangleIcon } from "../../ui/icon/Triangle"
import MonthPicker from "../../ui/MonthPicker"
import ReportList from "./ReportList";

export default function ReportArchive() {
  useFetchForReport();

  const { weeklyReports } = useDashboardStore();
  const [value, setValue] = useState<Date | null>(new Date());

  const targetMonth = formatDateYM(value);


  const filteredWeeklyReports = weeklyReports.filter(report => {
    const reportMonth = report.start_date.substring(0, 7); 
    return reportMonth === targetMonth;
  });

  return (
    <div className="flex flex-col justify-center w-full max-w-lg pt-4 pb-7 md:py-7 bg-white rounded-md">

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
  </div>  
  )
}
