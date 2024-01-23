"use client"
import { Task } from "@/types";
import { showErrorNotification } from "@/utils/notifications";

export const fetchTasks = async (setTasks: (tasks: Task[]) => void) => {
  try {
    const response = await fetch('/features/teamTask/api/getTasks');
    const data = await response.json();
    setTasks(data)
  } catch (error) {
    console.error(error);
    showErrorNotification('データの取得に失敗しました');
  }
};