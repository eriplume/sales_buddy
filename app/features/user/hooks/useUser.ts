"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { showErrorNotification } from "@/utils/notifications";

const useFetchUser = () => {
  const { id, notifications, teamId, teamName, setId, setTeamId, setTeamName, setNotifications} = useUserStore();

  useEffect(() => {
    if (notifications === undefined || teamId === undefined || teamName === undefined) {
      const fetchUser = async () => {
        try {
          const response = await fetch('/features/user/api/getCurrentSetting');
          const data = await response.json();
          setId(data.id)
          setNotifications(data.notifications)
          setTeamId(data.group_id)
          setTeamName(data.group_name)
        } catch (error) {
          console.error(error);
          showErrorNotification('データの取得に失敗しました');
        }
      };
      fetchUser();
    }
  }, [id, notifications, teamId, teamName, setId, setTeamId, setNotifications, setTeamName]);
};

export default useFetchUser;
