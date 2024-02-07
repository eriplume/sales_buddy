"use client"
import useTaskStore from '@/store/taskStore';
import { Tabs } from '@mantine/core';
import { TriangleIcon } from '../../../components/ui/icon/Triangle';
import TaskIndex from '@/app/features/teamTask/components/TaskIndex';
import { FolderIcon } from '@heroicons/react/24/outline';

export default function TaskTab() {
  const { teamTasks, userTasks } = useTaskStore();
  const onlyTeamTasks = teamTasks.filter(task => task.isGroupTask);
  const currentUserTasks = userTasks.filter(task => !task.isGroupTask)
  const userTaskIds = userTasks.map(task => task.id);

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 z-0 max-w-4xl mb-7 mt-4">
      <Tabs color="#93c5fd" defaultValue="all">
        <Tabs.List>
          <Tabs.Tab value="all" leftSection={<FolderIcon className="w-5 h-5 text-slate-400 font-bold"/>} color="#94a3b8">
            ALL
          </Tabs.Tab>
          <Tabs.Tab value="personal" leftSection={<TriangleIcon className="w-4 h-4 text-blue-300"/>}>
            TEAM
          </Tabs.Tab>
          <Tabs.Tab value="share" leftSection={<TriangleIcon className="w-4 h-4 text-sky-700"/>} color="#0369a1">
            MINE
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
          <TaskIndex taskList={teamTasks} editableTaskIds={userTaskIds}/>
        </Tabs.Panel>

        <Tabs.Panel value="personal">
          <TaskIndex taskList={onlyTeamTasks} editableTaskIds={userTaskIds}/>
        </Tabs.Panel>

        <Tabs.Panel value="share">
          <TaskIndex taskList={currentUserTasks} editableTaskIds={userTaskIds}/>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
