"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { showErrorNotification } from "@/utils/notifications";

const useFetchUser = () => {
  const { notifications, team} = useUserStore();

  useEffect(() => {
    if (notifications === undefined || team === undefined) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/setting`);
          const data = await response.json();
          useUserStore.setState({
            notifications: data.notifications,
            team: data.group_name
          });
        } catch (error) {
          console.error(error);
          showErrorNotification('データの取得に失敗しました');
        }
      };
      fetchUser();
    }
  }, [notifications, team]);
};

export default useFetchUser;
