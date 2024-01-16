"use client"
import { Tabs } from '@mantine/core';
import { TriangleIcon } from '../../../components/ui/icon/Triangle';
import HelpMordal from '../../../components/ui/HelpMordal';
import RecordInputForm from './RecordInputForm';
import Datepicker from './DatePicker';
import HelpPage from './HelpPage';

type CaluculatorProps = {
  salesDates: string[];
}

export default function Caluculator({salesDates}: CaluculatorProps) {
  return (
    <>
      <div className="flex flex-col w-full max-w-lg">
        <Tabs variant="outline" defaultValue="sales">
          <Tabs.List>
            <div className="bg-white text-gray-500 rounded-sm">
              <Tabs.Tab value="sales" leftSection={<TriangleIcon className="w-4 h-4 ml-2 text-blue-300"/>}>
                <div className='flex flex-row mt-1 mr-2'>
                  <div className="text-xs mr-1">STEP1.</div>
                  <div className="text-xs text-gray-800 mr-12">日付を選択</div>
                </div>
              </Tabs.Tab>
            </div>
            <div className="bg-white text-gray-500"></div>
            <div className="flex justify-end items-center my-1 ml-3 md:ml-6">
              <HelpMordal>
                <HelpPage />
              </HelpMordal>
              <div className='text-sm text-gray-600 ml-1 mt-1 hidden lg:block'>使い方をみる</div>
              <div className='text-xs text-gray-600 ml-1 mr-2 lg:hidden'>使い方</div>
            </div>
          </Tabs.List>
          <Tabs.Panel value="sales">
            <div className="bg-white px-7 pb-3 shadow-md rounded-b-sm border-x flex flex-col">
              <div className="w-full px-3 pb-2 pt-4">
                <Datepicker salesDates={salesDates} />
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
        <div className="bg-white px-6 shadow-md rounded-sm flex flex-col pt-3 mt-3 md:mt-5 border">
          <div className="flex flex-raw text-gray-500 items-center mb-2">
            <TriangleIcon className="w-4 h-4 mr-2 text-blue-300"/>
            <div className='flex flex-row mt-1 mr-2'>
              <div className="text-xs mr-1">STEP2.</div>
              <div className="text-xs text-gray-800">レシートから各値を入力</div>
            </div>
          </div>
          <div className="flex pt-1 pb-5 w-full px-2">
            <RecordInputForm />
          </div>
        </div>
      </div>
    </>
  )
}
