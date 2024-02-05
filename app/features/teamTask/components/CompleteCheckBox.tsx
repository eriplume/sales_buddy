"use client"
import axios from 'axios'
import { useState } from "react";
import { Task } from "@/types";
import { Checkbox, Tooltip} from "@mantine/core"
import useTaskStore from "@/store/taskStore";
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { fetchTasks } from '../hooks/fetchTask';

type CompleteCheckBoxProps = {
  task: Task;
}

export default function CompleteCheckBox({ task }: CompleteCheckBoxProps  ) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { setTeamTasks, setUserTasks, userTasks  } = useTaskStore(); 

  const userTaskIds = userTasks.map(task => task.id);
  const isCheckboxEnabled = task.isGroupTask || userTaskIds.includes(task.id);

  const taskColorClass = task.isGroupTask ? '#93c5fd' : '#0369a1';

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

  return (
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
  )
}
