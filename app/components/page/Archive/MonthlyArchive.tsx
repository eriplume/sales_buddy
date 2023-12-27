"use client"
import { useState } from "react";
import { useFetchResisterdDay } from "@/lib/useFetchData";
import { formatDateYM } from "@/utils/dateUtils";
import { calculateTotal, calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import useDashboardStore from "@/store/dashboardStore";
import MonthlyRecord from "./MonthlyRecord";
import WeeklyRecord from "./WeeklyRecord";
import MonthPicker from "../../ui/MonthPicker";
import { TriangleIcon } from "../../ui/icon/Triangle";

export default function MonthlyArchive() {

  useFetchResisterdDay();

  const { salesRecords } = useDashboardStore();
  const [value, setValue] = useState<Date | null>(new Date());

  const targetMonth = formatDateYM(value);

  const filteredSalesRecords = salesRecords.filter(record => {
    const recordMonth = record.date.substring(0, 7); 
    return recordMonth === targetMonth;
  });
  
  const monthlyAmount = calculateTotal(filteredSalesRecords, 'total_amount');
  const monthlyNumber = calculateTotal(filteredSalesRecords, 'total_number');
  const monthlyCount = calculateTotal(filteredSalesRecords, 'count');
  const monthlySetRate = calculateSetRate(monthlyNumber, monthlyCount);
  const monthlyAverage = calculateAverage(monthlyAmount, monthlyCount);

  return (
    <>
    <div className="flex flex-col justify-center w-full max-w-lg py-7 bg-white rounded-sm">

      <div className="flex flex-row justify-start px-7 md:px-12">
        <TriangleIcon className="w-4 h-4 mr-1 ml-4 text-blue-300" />
        <div className='text-xs text-gray-500'>月を選択</div>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-7 md:px-12"> 
        <div className="w-full items-center max-w-md p-3">
          <MonthPicker value={value} setValue={setValue} />
        </div>
      </div>

      <MonthlyRecord amount={monthlyAmount} number={monthlyNumber} count={monthlyCount} setRate={monthlySetRate} average={monthlyAverage}/>
      <WeeklyRecord monthRecords={filteredSalesRecords} />
    </div>    
    </>
  )
}
