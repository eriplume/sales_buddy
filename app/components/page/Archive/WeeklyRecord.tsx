import { SalesRecord } from "@/types";
import { getWeekHead, sortData } from "@/utils/dateUtils";
import { calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import { formatCurrency } from "@/utils/currencyUtils";

type WeeklyRecordProps = {
  monthRecords: SalesRecord[];
};

type WeeklyData = {
  amount: number;
  number: number;
  count: number;
  setRate: number;
  average: number;
};

export default function WeeklyRecord({monthRecords} :WeeklyRecordProps) {

  const weeklyData = monthRecords.reduce<Record<string, WeeklyData>>((acc, record) => {
    const weekHead = getWeekHead(record.date);
    if (!acc[weekHead]) {
        acc[weekHead] = { amount: 0, number: 0, count: 0, setRate: 0, average: 0 };
      }
        acc[weekHead].amount += record.total_amount;
        acc[weekHead].number += record.total_number;
        acc[weekHead].count += record.count;
        
        acc[weekHead].setRate = calculateSetRate(acc[weekHead].number, acc[weekHead].count)
        acc[weekHead].average = calculateAverage(acc[weekHead].amount, acc[weekHead].count)
        return acc;
  }, {});

  const sortedWeeklyData = sortData(weeklyData);

  return (
    <>
    {sortedWeeklyData.map(weekKey => (
      <div key={weekKey}>
        <div>{weekKey} 〜</div>
        <div>金額: {formatCurrency(weeklyData[weekKey].amount)}</div>
        <div>点数: {weeklyData[weekKey].number}</div>
        <div>客数: {weeklyData[weekKey].count}</div>
        <div>セット率: {weeklyData[weekKey].setRate.toFixed(1)}</div>
        <div>客単価: {formatCurrency(weeklyData[weekKey].average)}</div>
      </div>
    ))}
    </>
  )
}
