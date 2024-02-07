"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { fetchUser } from "./fetchUser";

const useFetchUser = () => {
  const { id, notifications, teamId, teamName, setId, setTeamId, setTeamName, setNotifications} = useUserStore();

  useEffect(() => {
    if (notifications === undefined || teamId === undefined || teamName === undefined) {
      fetchUser({setId, setTeamId, setTeamName, setNotifications});
    }
  }, [id, notifications, teamId, teamName, setId, setTeamId, setNotifications, setTeamName]);
};

export default useFetchUser;
