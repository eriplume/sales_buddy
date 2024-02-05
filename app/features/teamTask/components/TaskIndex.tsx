"use client"
import { useState } from 'react';
import { Task } from '@/types';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from "@mantine/core"
import { PencilIcon } from '@heroicons/react/24/outline';
import CreateTask from './CreateTask';
import InputForm from './InputForm';
import TaskCard from './TaskCard';
import SwithTask from './Switch';

type IndexProps = {
  taskList: Task[];
  editableTaskIds: number[];
}

export default function TaskIndex({taskList, editableTaskIds}: IndexProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentEditingTask, setCurrentEditingTask] =  useState<Task | null>(null);
  const [checked, setChecked] = useState(false);

  const filteredTasks = checked
  ? taskList.filter(task => task.isCompleted)
  : taskList.filter(task => !task.isCompleted);

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
      <div className="container py-4 mx-auto md:min-w-[700px]">
        <div className='flex flex-row items-center my-3 ml-2'>
          <CreateTask />
          <SwithTask checked={checked} setChecked={setChecked}/>
        </div>
        <div className="flex flex-wrap">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) =>(
              <div className="p-1 md:w-1/2 w-full" key={task.id}>
                <TaskCard 
                  task={task} 
                  editableTaskIds={editableTaskIds} 
                  setCurrentEditingTask={setCurrentEditingTask} 
                  open={open} 
                  close={close}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-5">タスクがありません</div>
          )}
        </div>
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
