"use client"
import { useState } from 'react';
import { Task } from '@/types';
import { formatDateLayoutMMDD } from '@/utils/dateUtils';
import { Checkbox, Tooltip, Rating } from "@mantine/core"
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/solid';
import TaskActions from './TaskActions';

type TaskCardProps = {
  task: Task;
  editableTaskIds: number[];
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskCard({ task, editableTaskIds, setCurrentEditingTask, open, close }: TaskCardProps) {
  const [checked, setChecked] = useState(false);
  return (
    <>
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
              <TaskActions task={task} setCurrentEditingTask={setCurrentEditingTask} open={open} close={close}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
