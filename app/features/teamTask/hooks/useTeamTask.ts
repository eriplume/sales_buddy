"use client"
import { useEffect } from "react";
import useTaskStore from "@/store/taskStore";
import { fetchTasks } from "./fetchTask";
import useUserStore from "@/store/userStore";

const useFetchTask = () => {
  const { teamTasks, setTeamTasks, userTasks, setUserTasks } = useTaskStore();
  const { teamId } = useUserStore();

  useEffect(() => {
    if (teamId !== undefined && teamId !== 1 && teamId !== null && (teamTasks.length === 0 || userTasks.length === 0)) {
      fetchTasks({ setTeamTasks, setUserTasks });
    }
  },  [teamTasks.length, userTasks.length, setTeamTasks, setUserTasks, teamId]);
};

export default useFetchTask;
