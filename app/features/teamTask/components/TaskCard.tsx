"use client"
import axios from 'axios'
import { useState } from 'react';
import { Task } from '@/types';
import { formatDateLayoutMMDD } from '@/utils/dateUtils';
import { Checkbox, Tooltip, Rating } from "@mantine/core"
import { CheckIcon, ClockIcon, MegaphoneIcon, UserIcon } from '@heroicons/react/24/outline';
import TaskActions from './TaskActions';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { fetchTasks } from '../hooks/fetchTask';
import useTaskStore from '@/store/taskStore';

type TaskCardProps = {
  task: Task;
  editableTaskIds: number[];
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskCard({ task, editableTaskIds, setCurrentEditingTask, open, close }: TaskCardProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { setTeamTasks, setUserTasks, userTasks  } = useTaskStore(); 
  const userTaskIds = userTasks.map(task => task.id);

  const handleChange = (task: Task) => {
    setSelectedTask(task);
    if (task.isCompleted) {
      return;
    }
    handleComplete(task.id);
  };

  const handleComplete = async(taskId: number) => {
    const isConfirmed = confirm("完了しましたか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.patch(`/features/teamTask/api/completeTask/${taskId}`);
      showSuccessNotification(`完了しました`);
      fetchTasks({setTeamTasks, setUserTasks});
      setSelectedTask(null);
    } catch (error) {
      showErrorNotification('更新に失敗しました。');
    }
  };

  const isCheckboxEnabled = task.isGroupTask || userTaskIds.includes(task.id);

  const taskColorClass = task.isGroupTask ? '#93c5fd' : '#0369a1';

  return (
    <>
      <div className={`h-full flex items-center p-4 rounded-lg bg-white shadow-md border-4 
                            ${task.isGroupTask ? 'border-blue-100' : 'border-blue-50'}`}
      >
        <div className='flex mr-4'>
          <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
            <Checkbox
              size='lg'
              color={taskColorClass}
              checked={task.isCompleted}
              onChange={() => handleChange(task)}
              className="shadow-md"
              variant="outline"
              disabled={!isCheckboxEnabled}
            />
          </Tooltip>
        </div>
        <div className="flex-grow">
          <div className="text-gray-600 text-md font-bold ml-2 lg:ml-4 mb-1">{task.title}</div>
          <div className='flex flex-row items-center border-t pt-2'>
            <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
            <div className="text-gray-600 text-sm mr-3 lg:mr-5">{formatDateLayoutMMDD(task.deadline)}</div>
            <Rating size="sm" count={3} color={taskColorClass} value={task.importance} readOnly/>
          </div>
          <div className='flex flex-row justify-between items-center pt-1 mt-1'> 
            <div className='flex flex-row items-center'>
              {task.isCompleted ? 
                <>
                  <CheckIcon className='w-5 h-5 ml-2 lg:ml-4 mr-1 text-gray-400' />
                  <div className="text-gray-600 text-sm mr-3 lg:mr-5">{task.completedByName}</div>
                </> 
              : 
              <>
                {task.isGroupTask ? 
                  <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-row'>
                      <MegaphoneIcon className='w-5 h-5 ml-2 lg:ml-4 mr-1 text-gray-400' />
                      <div className="text-gray-600 text-sm">from</div>
                    </div>
                    <div className="text-gray-600 font-bold text-sm ml-8 md:ml-3">{task.userName}さん</div>
                  </div>
                :  
                  <>
                    <UserIcon className='w-5 h-5 ml-2 lg:ml-4 mr-1 text-gray-400' />
                    <div className="text-gray-600 font-bold text-sm mr-3 lg:mr-5">{task.userName}</div>
                  </>            
                }
              </>
            }
            </div>
            {editableTaskIds.includes(task.id) && 
              <TaskActions task={task} setCurrentEditingTask={setCurrentEditingTask} open={open} close={close}/>
            }
          </div>
        </div>
      </div>
    </>
  )
}
