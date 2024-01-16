import { Accordion } from '@mantine/core';
import { FolderIcon } from "@heroicons/react/24/outline";
import SummaryContent from './SummaryContent';

type MonthlySummaryProps = {
  content: string;
  id: number;
};

export default function MonthlySummary({content, id} :MonthlySummaryProps) {
  return (
    <>
      <div className="px-7 md:px-14">
        <Accordion variant="contained" defaultValue="summary">
          <Accordion.Item key="monthlyーsummary" value="summary">
            <Accordion.Control
              icon={<FolderIcon className="w-6 h-6 ml-2 text-blue-300"/>}
            >
              まとめ
            </Accordion.Control>
            <Accordion.Panel>
              <SummaryContent content={content} id={id}/>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  )
}
