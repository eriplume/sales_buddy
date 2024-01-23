"use client"
import { Tabs } from '@mantine/core';
import { TriangleIcon } from '../ui/icon/Triangle';
import TaskIndex from '@/app/features/teamTask/components/TaskIndex';
import { FolderIcon } from '@heroicons/react/24/outline';

export default function TeamTask() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <Tabs color="#93c5fd" defaultValue="all">
        <Tabs.List>
          <Tabs.Tab value="all" leftSection={<FolderIcon className="w-5 h-5 text-slate-400 font-bold"/>} color="#94a3b8">
            ALL
          </Tabs.Tab>
          <Tabs.Tab value="personal" leftSection={<TriangleIcon className="w-4 h-4 text-blue-300"/>}>
            共有タスク
          </Tabs.Tab>
          <Tabs.Tab value="share" leftSection={<TriangleIcon className="w-4 h-4 text-orange-300"/>} color="#fdba74">
            個人タスク
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
          <TaskIndex />
        </Tabs.Panel>

        <Tabs.Panel value="personal">
          <TaskIndex />
        </Tabs.Panel>

        <Tabs.Panel value="share">
          <TaskIndex />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
