"use client"
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Checkbox, Tooltip, Rating,  Modal } from "@mantine/core"
import { PencilSquareIcon, ClockIcon, UserIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/solid';
import CreateTask from './CreateTask';
import { formatDateLayoutMMDD } from '@/utils/dateUtils';
import { Task } from '@/types';
import InputForm from './InputForm';

type IndexProps = {
  taskList: Task[];
  editableTaskIds: number[];
}

export default function TaskIndex({taskList, editableTaskIds}: IndexProps) {
  const [checked, setChecked] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [currentEditingTask, setCurrentEditingTask] =  useState<Task | null>(null);

  const handleEditButtonClick = (task: Task) => {
    setCurrentEditingTask(task);
    open();
  };

  const renderModalTitle = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full pt-4 pr-22 mr-16 mb-1 text-md font-bold text-gray-600'>
          <div className='flex w-full ml-2 items-center'>
            <PencilIcon className="w-8 h-8 text-gray-500 mr-2" />
            タスクを編集する
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-4 mx-auto md:min-w-[600px]">
        <CreateTask />
        <div className="flex flex-wrap">
          {taskList.length > 0 ? (
            taskList.map((task) =>(
              <div className="p-1 md:w-1/2 w-full" key={task.id}>
                <div className={`h-full flex items-center p-4 rounded-lg bg-white shadow-md border-4 
                                    ${task.isGroupTask ? 'border-blue-100' : 'border-orange-100'}`}
                >
                  <div className='flex mr-4'>
                    <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                      <Checkbox
                        size='lg'
                        color="#93c5fd"
                        checked={checked}
                        onChange={(event) => setChecked(event.currentTarget.checked)}
                        className="shadow-md"
                        variant="outline"
                      />
                    </Tooltip>
                  </div>
                  <div className="flex-grow">
                    <div className="text-gray-600 text-md font-bold ml-2 lg:ml-4 mb-1">{task.title}</div>
                    <div className='flex flex-row items-center border-t pt-2'>
                      <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                      <div className="text-gray-600 text-sm mr-3 lg:mr-5">{formatDateLayoutMMDD(task.deadline)}</div>
                      <Rating size="sm" count={3} color="#93c5fd" value={task.importance} readOnly/>
                    </div>

                    <div className='flex flex-row justify-between items-center pt-1 mt-1'> 
                      <div className='flex flex-row items-center'>
                        {task.isGroupTask ? 
                          <>
                            <UsersIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                            <div className="text-gray-600 text-sm mr-3 lg:mr-5">{task.userName}</div>
                          </> 
                        : 
                          <>
                            <UserIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                            <div className="text-gray-600 text-sm mr-3 lg:mr-5">{task.userName}</div>
                          </>  
                        }
                      </div>
                      {editableTaskIds.includes(task.id) && (
                        <div className='flex pr-1 items-center'>
                          <ActionIcon 
                            variant="outline"
                            color="#cbd5e1" 
                            size="md" 
                            className="shadow-md hover:text-gray-500 transition-transform"
                            onClick={() => handleEditButtonClick(task)}
                          >
                            <PencilSquareIcon className='w-8 h-8 p-1' />
                          </ActionIcon>
                          <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform ml-2">
                            <TrashIcon className='w-8 h-8 p-1' />
                          </ActionIcon>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-5">タスクが登録されていません</div>
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
              endpoint='editTask'
              initialValues={{
                title: currentEditingTask?.title ?? '',
                isTeamTask: currentEditingTask?.isGroupTask ? "true" : "false",
                importance: currentEditingTask?.importance ?? 0,
                deadline: currentEditingTask ? new Date(currentEditingTask.deadline) : new Date(),
              }}
              taskId={currentEditingTask?.id}
              close={close} 
            />
          </div>
        </Modal>
      )}
    </>
  )
}
