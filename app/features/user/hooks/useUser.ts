"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { showErrorNotification } from "@/utils/notifications";

const useFetchUser = () => {
  const { notifications, teamId, teamName} = useUserStore();

  useEffect(() => {
    if (notifications === undefined || teamId === undefined || teamName === undefined) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/setting`);
          const data = await response.json();
          useUserStore.setState({
            notifications: data.notifications,
            teamId: data.group_id,
            teamName: data.group_name
          });
        } catch (error) {
          console.error(error);
          showErrorNotification('データの取得に失敗しました');
        }
      };
      fetchUser();
    }
  }, [notifications, teamId, teamName]);
};

export default useFetchUser;
