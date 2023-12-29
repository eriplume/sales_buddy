import { WeeklyReport } from '@/types';
import { formatDateLayoutMD } from '@/utils/dateUtils';
import { Accordion } from '@mantine/core';
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import ReportContent from './ReportContent';

type WeeklyRecordProps = {
  reportsList: WeeklyReport[];
};

export default function ReportList({reportsList}: WeeklyRecordProps) {
  return (
    <>
      <div className="px-7 md:px-14">
        <Accordion variant="contained">
          {reportsList.length > 0 ? (
            reportsList.map((report, index) => (
              <Accordion.Item key={index} value={report.start_date}>
                <Accordion.Control
                  icon={<ChatBubbleBottomCenterTextIcon className="w-6 h-6 ml-2 text-blue-300"/>}
                >
                  {formatDateLayoutMD(report.start_date)} 〜 {formatDateLayoutMD(report.end_date)}
                </Accordion.Control>
                <Accordion.Panel>
                  <ReportContent content={report.content}/>
                </Accordion.Panel>
              </Accordion.Item>
            ))
          ) : (
            <div className="text-center text-gray-500 py-5">レポートが登録されていません</div>
          )}
        </Accordion>
      </div>
    </>
  )
}