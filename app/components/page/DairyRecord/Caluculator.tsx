"use client"
import { useFetchForCalculator } from '@/lib/useFetchData';
import { Tabs } from '@mantine/core';
import { TriangleIcon } from '../../ui/icon/Triangle';
import HelpMordal from '../../ui/HelpMordal';
import RecordInputForm from './RecordInputForm';
import Datepicker from './DatePicker';
import HelpPage from './HelpPage';

export default function Caluculator() {
  useFetchForCalculator();

  return (
    <>
      <div className="flex flex-col w-full max-w-lg">
        <Tabs variant="outline" defaultValue="sales">
          <Tabs.List>
            <div className="bg-white text-gray-500 rounded-sm">
              <Tabs.Tab value="sales" leftSection={<TriangleIcon className="w-3 h-3 ml-2 text-blue-300"/>}>
                <div className='flex flex-row mt-1 mr-2'>
                  <div className="text-xs mr-1">STEP1.</div>
                  <div className="text-xs text-gray-800">日付を選択</div>
                </div>
              </Tabs.Tab>
            </div>
            <div className="bg-white text-gray-500"></div>
          </Tabs.List>
          <Tabs.Panel value="sales">
            <div className="bg-white px-7 pb-3 shadow-md rounded-b-sm border-x flex flex-col">
              <div className="w-full px-3 pb-2 pt-4">
                <Datepicker/>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>

        <Tabs variant="outline" defaultValue="sales" className='pt-3 md:pt-6'>
          <Tabs.List>
            <div className="bg-white text-gray-500 rounded-sm">
              <Tabs.Tab value="sales" leftSection={<TriangleIcon className="w-3 h-3 ml-2 text-blue-300"/>}>
                <div className='flex flex-row mt-1 mr-2'>
                  <div className="text-xs mr-1">STEP2.</div>
                  <div className="text-xs text-gray-800">レシートから各値を入力</div>
                </div>
              </Tabs.Tab>
            </div>
            <div className="bg-white text-gray-500"></div>
            <div className="flex justify-end mt-1 ml-3">
                <HelpMordal>
                  <HelpPage />
                </HelpMordal>
              </div>
          </Tabs.List>
          <Tabs.Panel value="sales">
            <div className="bg-white px-7 shadow-md rounded-b-sm border-x flex flex-col">
              <div className="flex pt-1 pb-5 w-full px-2">
                <RecordInputForm/>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}
