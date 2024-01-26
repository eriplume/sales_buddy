"use client"
import { useEffect } from "react";
import useTeamStore from "@/store/teamStore";
import useUserStore from "@/store/userStore";
import { showErrorNotification } from "@/utils/notifications";

const useFetchTeams = () => {
  const { members, setMembers } = useTeamStore();
  const { teamId } = useUserStore();

  useEffect(() => {
    if (teamId !== 1 && (members?.length === 0 || !members)) {
      const fetchTeams = async () => {
        try {
          const response = await fetch(`/features/teamJoin/api/getTeamMembers`);
          const data = await response.json();
          setMembers(data.members)
        } catch (error) {
          console.error(error);
          showErrorNotification('データの取得に失敗しました');
        }
      }
      fetchTeams();
    }
  }, [members, teamId, setMembers]);
};

export default useFetchTeams;