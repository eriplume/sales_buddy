import { SalesRecord, WeeklyRecord } from "@/types";
import { getWeekHead, getweekEndDate, sortData, formatDateLayoutMD } from "@/utils/dateUtils";
import { calculateSetRate, calculateAverage } from "@/utils/calculateUtils";
import { Accordion } from '@mantine/core';
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import WeeklyRecordContents from "./WeeklyRecordContents";

type WeeklyRecordProps = {
  monthRecords: SalesRecord[];
};

export default function WeeklyArchive({monthRecords} :WeeklyRecordProps) {

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
      <div className="px-9 pt-4">
        <Accordion variant="contained">
          {sortedWeeklyData.map(weekKey => (
            
            <Accordion.Item key={weekKey} value={weekKey}>
              <Accordion.Control
                icon={ <ClipboardDocumentListIcon className="w-6 h-6 ml-2 text-blue-300"/>
                }
              >
                {formatDateLayoutMD(weekKey)} 〜 {formatDateLayoutMD(weeklyData[weekKey].weekEnd)}
              </Accordion.Control>
              <Accordion.Panel>
                <WeeklyRecordContents 
                  amount={weeklyData[weekKey].amount} 
                  number={weeklyData[weekKey].number}
                  count={weeklyData[weekKey].count}
                  setRate={weeklyData[weekKey].setRate}
                  average={weeklyData[weekKey].average}
                  />
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  )
}
