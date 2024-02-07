"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { fetchUser } from "./fetchUser";

const useFetchUser = () => {
  const { id, notifications, teamId, teamName, taskNotifications, setId, setTeamId, setTeamName, setNotifications, setTaskNotifications} = useUserStore();

  useEffect(() => {
    if (notifications === undefined || teamId === undefined || teamName === undefined) {
      fetchUser({setId, setTeamId, setTeamName, setNotifications, setTaskNotifications});
    }
  }, [id, notifications, teamId, teamName, taskNotifications ,setId, setTeamId, setNotifications, setTeamName, setTaskNotifications]);
};

export default useFetchUser;
