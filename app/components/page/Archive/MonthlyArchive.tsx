"use client"
import { useState } from "react";
import { useFetchForArchive } from "@/lib/useFetch";
import { formatDateYM } from "@/utils/dateUtils";
import { calculateTotal, calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import useDashboardStore from "@/store/dashboardStore";
import MonthlyRecord from "./MonthlyRecord";
import RecordList from "./RecordList";
import MonthPicker from "../../ui/MonthPicker";
import { TriangleIcon } from "../../ui/icon/Triangle";

export default function MonthlyArchive() {
  useFetchForArchive();

  const { salesRecords } = useDashboardStore();
  const [value, setValue] = useState<Date | null>(new Date());

  const targetMonth = formatDateYM(value);

  const filteredSalesRecords = salesRecords.filter(record => {
    const recordMonth = record.date.substring(0, 7); 
    return recordMonth === targetMonth;
  });

  const numberOfDays = filteredSalesRecords.length;
  
  const monthlyAmount = calculateTotal(filteredSalesRecords, 'total_amount');
  const monthlyNumber = calculateTotal(filteredSalesRecords, 'total_number');
  const monthlyCount = calculateTotal(filteredSalesRecords, 'count');
  const monthlySetRate = calculateSetRate(monthlyNumber, monthlyCount);
  const monthlyAverage = calculateAverage(monthlyAmount, monthlyCount);

  return (
    <>
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
        <MonthlyRecord amount={monthlyAmount} number={monthlyNumber} count={monthlyCount} setRate={monthlySetRate} average={monthlyAverage} days={numberOfDays}/>
        <div className="flex flex-row justify-start px-7 pt-5 pb-2 md:px-12">
          <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
          <div className='text-sm text-gray-800'>各週のデータ</div>
        </div>
        <RecordList monthRecords={filteredSalesRecords} />
      </div>    
    </>
  )
}
