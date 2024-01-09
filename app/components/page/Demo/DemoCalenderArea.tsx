"use client"
import { Tabs } from '@mantine/core';
import { TriangleIcon } from "../../ui/icon/Triangle";
import HelpMordal from "../../ui/HelpMordal";
import HelpPage from '../DashBoard/HelpPage';
import DemoSalesCalendar from './DemoSalesCalendar';
import DemoJobsCalendar from './DemoJobsCalendar';

export default function DemoCalenderArea() {
  return (
    <Tabs variant="outline" defaultValue="sales">
      <Tabs.List>
        <div className="bg-white text-gray-500 rounded-sm">
          <Tabs.Tab value="sales" leftSection={<TriangleIcon className="w-3 h-3 text-blue-300"/>}>
            <div className="text-xs p-1">売上記録</div>
          </Tabs.Tab>
        </div>
        <div className="bg-white text-gray-500">
          <Tabs.Tab value="jobs" leftSection={<TriangleIcon className="w-3 h-3 text-yellow-200"/>}>
          <div className="text-xs p-1">業務記録</div>
          </Tabs.Tab>
        </div>
        <div className="mx-8 mt-1">
          <HelpMordal>
            <HelpPage />
          </HelpMordal>
        </div>
      </Tabs.List>
      <Tabs.Panel value="sales">
        <div className="bg-white px-7 pt-4 pb-7 shadow-md rounded-b-md border-x flex flex-col">
          <div className="flex flex-row justify-end items-center w-full text-gray-400 px-2 mb-2">
            <span className="text-xs text-blue-300 mr-1">⚫︎</span>
            <span className="text-xs">売上を記録した日</span>
          </div>
          <DemoSalesCalendar />
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="jobs">
        <div className="bg-white px-7 pt-4 pb-7 shadow-md rounded-b-md border-x flex flex-col">
          <div className="flex flex-row justify-end items-center w-full text-gray-400 px-2 mb-2">
            <span className="text-xs text-yellow-300 mr-1">⚫︎</span>
            <span className="text-xs">業務を記録した日</span>
          </div>
          <DemoJobsCalendar />
        </div>
      </Tabs.Panel>
    </Tabs>
  )
}
