"use client"
import { useEffect } from "react";
import useTeamStore from "@/store/teamStore";
import useUserStore from "@/store/userStore";
import { fetchTeamMembers } from "./fetchTeamMembers";

const useFetchTeams = () => {
  const { members, setMembers } = useTeamStore();
  const { teamId } = useUserStore();

  useEffect(() => {
    if (teamId !== undefined && teamId !== 1 && teamId !== null && (members?.length === 0 || !members)) {
      fetchTeamMembers({setMembers});
    }
  }, [members, teamId, setMembers]);
};

export default useFetchTeams;