"use client"
import { useState } from "react";
import { formatDateYM } from "@/utils/dateUtils";
import { calculateTotal, calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import useDashboardStore from "@/store/dashboardStore";
import MonthlyRecord from "./MonthlyRecord";
import WeeklyRecord from "./WeeklyRecord";
import MonthPicker from "../../ui/MonthPicker";

export default function MonthlyArchive() {
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
    <MonthPicker value={value} setValue={setValue} />

    <MonthlyRecord amount={monthlyAmount} number={monthlyNumber} count={monthlyCount} setRate={monthlySetRate} average={monthlyAverage}/>

    <WeeklyRecord monthRecords={filteredSalesRecords} />

    </>
  )
}
