"use client"
import { useEffect } from "react";
import useTaskStore from "@/store/taskStore";
import { fetchTasks } from "./fetchTask";

const useFetchTask = () => {
  const { teamTasks, setTeamTasks, userTasks, setUserTasks } = useTaskStore();

  useEffect(() => {
    if (teamTasks.length === 0) {
      fetchTasks({setTeamTasks, setUserTasks});
    }
  }, [setTeamTasks, teamTasks, userTasks, setUserTasks]);
};

export default useFetchTask;
