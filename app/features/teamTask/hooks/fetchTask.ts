"use client"
import { Task } from "@/types";
import { showErrorNotification } from "@/utils/notifications";

type FetchTasksProps = {
  setUserTasks: (tasks: Task[]) => void;
  setTeamTasks:(tasks: Task[]) => void;
}

export const fetchTasks = async ({setUserTasks, setTeamTasks}: FetchTasksProps) => {
  try {
    const response = await fetch('/features/teamTask/api/getTasks');
    const data = await response.json();
    setUserTasks(data.user_tasks);
    setTeamTasks(data.group_tasks);
  } catch (error) {
    console.error(error);
    showErrorNotification('データの取得に失敗しました');
  }
};