"use client"
import { showErrorNotification } from "@/utils/notifications";

type FetchUserProps = {
  setId: (id: number) => void;
  setNotifications: (force: boolean) => void;
  setTaskNotifications: (force: boolean) => void;
  setTeamId: (teamId: number | null) => void; 
  setTeamName: (teamName: string | null) => void;
}

export  const fetchUser = async ({setId, setNotifications, setTaskNotifications, setTeamId,  setTeamName}: FetchUserProps) => {
  try {
    const response = await fetch('/features/user/api/getCurrentSetting');
    const data = await response.json();
    setId(data.id)
    setNotifications(data.notifications)
    setTaskNotifications(data.task_notifications)
    setTeamId(data.group_id ?? null)
    setTeamName(data.group_name ?? null)
  } catch (error) {
    console.error(error);
    showErrorNotification('データの取得に失敗しました');
  }
};