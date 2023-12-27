import { SalesRecord, WeeklyRecord } from "@/types";
import { getWeekHead, getweekEndDate, sortData } from "@/utils/dateUtils";
import { calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import { formatCurrency } from "@/utils/currencyUtils";
import { Accordion } from '@mantine/core';
import { CheckBadgeIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

type WeeklyRecordProps = {
  monthRecords: SalesRecord[];
};

export default function WeeklyRecord({monthRecords} :WeeklyRecordProps) {

  const weeklyData = monthRecords.reduce<Record<string, WeeklyRecord>>((acc, record) => {
    const weekHead = getWeekHead(record.date);
    if (!acc[weekHead]) {
      acc[weekHead] = { amount: 0, number: 0, count: 0, setRate: 0, average: 0, weekEnd: '' };
    }
    acc[weekHead].amount += record.total_amount;
    acc[weekHead].number += record.total_number;
    acc[weekHead].count += record.count;
        
    acc[weekHead].setRate = calculateSetRate(acc[weekHead].number, acc[weekHead].count)
    acc[weekHead].average = calculateAverage(acc[weekHead].amount, acc[weekHead].count)

    acc[weekHead].weekEnd = getweekEndDate(weekHead);
    return acc;
  }, {});

  const sortedWeeklyData = sortData(weeklyData);

  return (
    <>
      <div className="px-9 pt-4">
        <Accordion variant="contained">
          {sortedWeeklyData.map(weekKey => (
            
            <Accordion.Item key={weekKey} value={weekKey}>
              <Accordion.Control
                icon={ <ClipboardDocumentListIcon className="w-6 h-6 text-blue-300"/>
                }
              >
                {weekKey} 〜 {weeklyData[weekKey].weekEnd}
              </Accordion.Control>
              <Accordion.Panel>
                <div>金額: {formatCurrency(weeklyData[weekKey].amount)}</div>
                <div>点数: {weeklyData[weekKey].number}</div>
                <div>客数: {weeklyData[weekKey].count}</div>
                <div>セット率: {weeklyData[weekKey].setRate.toFixed(1)}</div>
                <div>客単価: {formatCurrency(weeklyData[weekKey].average)}</div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  )
}
