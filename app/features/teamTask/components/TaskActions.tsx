"use client"
import axios from 'axios';
import { Task } from '@/types';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { fetchTasks } from '../hooks/fetchTask';
import useTaskStore from '@/store/taskStore';
import ActionIcons from './ActionIcons';

type EditButtonsProps = {
  task: Task;
  setCurrentEditingTask: (task: Task) => void;
  open: () => void;
  close: () => void;
}

export default function TaskActions({ task, setCurrentEditingTask, open, close }: EditButtonsProps) {
  const { setTeamTasks, setUserTasks } = useTaskStore(); 

  const handleEditButtonClick = (task: Task) => {
    setCurrentEditingTask(task);
    open();
  };
  
  const handleDelete = async(taskId: number) => {
    const isConfirmed = confirm("削除しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`/features/teamTask/api/deleteTask/${taskId}`);
      showSuccessNotification(`削除しました`);
      fetchTasks({setTeamTasks, setUserTasks});
      close();
    } catch (error) {
      showErrorNotification('削除に失敗しました。');
    }
  };

  return (
    <div className='flex pr-1 items-center'>
      <ActionIcons editAction={() => handleEditButtonClick(task)} deleteAction={() => handleDelete(task.id)}/>
    </div>
  )
}
