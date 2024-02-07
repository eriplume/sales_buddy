"use client"
import { useState } from 'react';
import { Task } from '@/types';
import { useDisclosure } from '@mantine/hooks';
import { Pagination, Modal } from '@mantine/core';
import { PencilIcon } from '@heroicons/react/24/outline';
import CreateTask from './CreateTask';
import InputForm from './InputForm';
import SwithTask from './Switch';
import TaskForPc from './TaskForPc';
import TaskForMb from './TaskForMb';

type IndexProps = {
  taskList: Task[];
  editableTaskIds: number[];
}

export default function TaskIndex({taskList, editableTaskIds}: IndexProps) {
  const [activePage, setActivePage] = useState(1);
  const [currentEditingTask, setCurrentEditingTask] =  useState<Task | null>(null);
  const [checked, setChecked] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const filteredTasks = checked
  ? taskList.filter(task => task.isCompleted)
  : taskList.filter(task => !task.isCompleted);

  function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const tasksPerPage = 8; // 一ページあたりのタスク数
  const chunkedTasks = chunk(filteredTasks, tasksPerPage);   // taskをチャンクに分割

  const renderModalTitle = () => {
    return (
      <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 text-md font-bold text-gray-600'>
        <div className='flex w-full ml-2 items-center'>
          <PencilIcon className="w-8 h-8 text-gray-500 mr-2" />
          タスクを編集する
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container py-4 mx-auto min-w-[300px] md:min-w-[700px] md:max-w-[700px]">
        <div className='flex flex-row items-center justify-between my-3 px-2'>
          <CreateTask />
          <div className='flex flex-row items-center'>
            <SwithTask checked={checked} setChecked={setChecked}/>
          </div>
        </div>
        <div className='hidden md:block'>
          <TaskForPc
            chunkedTasks={chunkedTasks} 
            editableTaskIds={editableTaskIds} 
            activePage={activePage} 
            setCurrentEditingTask={setCurrentEditingTask} 
            open={open} 
            close={close}
          />
        </div>
        <div className='md:hidden w-full'>
          <TaskForMb
            chunkedTasks={chunkedTasks} 
            editableTaskIds={editableTaskIds} 
            activePage={activePage} 
            setCurrentEditingTask={setCurrentEditingTask}
            open={open} 
            close={close}
          />
        </div>
        <Pagination total={chunkedTasks.length} value={activePage} onChange={setActivePage} mt="sm" color="#60a5fa" />
      </div>

      {opened && (
        <Modal
          opened={opened}
          onClose={() => {
            close();
            setCurrentEditingTask(null);
          }}
          centered
          size="md"
          title={renderModalTitle()}
        >
          <div className="flex w-full px-6 py-4">
            <InputForm 
              endpoint='updateTask'
              initialValues={{
                title: currentEditingTask?.title ?? '',
                isTeamTask: currentEditingTask?.isGroupTask ? "true" : "false",
                importance: currentEditingTask?.importance ?? 0,
                deadline: currentEditingTask ? new Date(currentEditingTask.deadline) : new Date(),
              }}
              taskId={currentEditingTask?.id}
              close={close}
              label="更新する"
            />
          </div>
        </Modal>
      )}
    </>
  )
}
