"use client"
import { useState } from 'react';
import axios from 'axios'
import { Task } from '@/types';
import useTaskStore from '@/store/taskStore';
import { formatDateLayoutMMDD, isDeadlineSoon } from '@/utils/dateUtils';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { Checkbox, Tooltip, Rating } from "@mantine/core"
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { fetchTasks } from '../hooks/fetchTask';
import TaskActions from './TaskActions';
import MemberIcon from '../../teamJoin/components/MemberIcon';
import CommentIcon from './CommentIcon';

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
          <div className="text-gray-600 text-md font-bold ml-2 lg:ml-4 mb-2">{task.title}</div>
          <div className='flex flex-row items-center border-t pt-3'>
            <MemberIcon imageUrl={task.userImageUrl} userName={task.userName}/>
            <ClockIcon className='w-5 h-5 text-gray-500 ml-3 mr-1' />
            {isDeadlineSoon(task.deadline) ? 
              <div className="text-red-400 text-sm mr-3 lg:mr-5">{formatDateLayoutMMDD(task.deadline)}</div>
            :
              <div className="text-gray-600 text-sm mr-3 lg:mr-5">{formatDateLayoutMMDD(task.deadline)}</div>
            }
            <Rating size="sm" count={3} color={taskColorClass} value={task.importance} readOnly/>
          </div>

          <div className='flex flex-row justify-end items-center pt-1 mt-1'> 
            <div className='flex flex-row items-center'>
              <CommentIcon taskId={task.id} comments={task.comments}/>
              {task.isCompleted && 
                <>
                  <CheckIcon className='w-5 h-5 ml-2 lg:ml-4 mr-1 text-gray-400' />
                  <div className="text-gray-600 text-sm mr-3 lg:mr-5">{task.completedByName}</div>
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
