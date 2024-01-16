import { SalesRecord, WeeklyRecord } from "@/types";
import { getWeekHead, getweekEndDate, sortData, formatDateLayoutMD } from "@/utils/dateUtils";
import { calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import { Accordion } from '@mantine/core';
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import WeekContents from "./WeekContents";

type WeeklyRecordProps = {
  monthRecords: SalesRecord[];
};

export default function WeekList({monthRecords} :WeeklyRecordProps) {

  const weeklyData = monthRecords.reduce<Record<string, WeeklyRecord>>((acc, record) => {
    const weekHead = getWeekHead(record.date);
    const weekEnd = getweekEndDate(weekHead);
    if (!acc[weekHead]) {
      acc[weekHead] = { amount: 0, number: 0, count: 0, setRate: 0, average: 0, weekEnd: '' };
    }
    acc[weekHead].amount += record.total_amount;
    acc[weekHead].number += record.total_number;
    acc[weekHead].count += record.count;
    acc[weekHead].setRate = calculateSetRate(acc[weekHead].number, acc[weekHead].count)
    acc[weekHead].average = calculateAverage(acc[weekHead].amount, acc[weekHead].count)
    acc[weekHead].weekEnd = weekEnd;
    return acc;
  }, {});

  const sortedWeeklyData = sortData(weeklyData);

  return (
    <>
      <div className="px-7 md:px-12">
        <Accordion variant="contained">
          {sortedWeeklyData.length > 0 ? (
            sortedWeeklyData.map(weekKey => (
              <Accordion.Item key={weekKey} value={weekKey}>
                <Accordion.Control
                  icon={ <ClipboardDocumentListIcon className="w-6 h-6 ml-2 text-blue-300"/>}
                >
                  {formatDateLayoutMD(weekKey)} 〜 {formatDateLayoutMD(weeklyData[weekKey].weekEnd)}
                </Accordion.Control>
                <Accordion.Panel>
                  <WeekContents 
                    amount={weeklyData[weekKey].amount} 
                    number={weeklyData[weekKey].number}
                    count={weeklyData[weekKey].count}
                    setRate={weeklyData[weekKey].setRate}
                    average={weeklyData[weekKey].average}
                    />
                </Accordion.Panel>
              </Accordion.Item>
            ))
          ) : (
            <div className="text-center text-gray-500 py-5">売上が登録されていません</div>
          )}
        </Accordion>
      </div>
    </>
  )
}