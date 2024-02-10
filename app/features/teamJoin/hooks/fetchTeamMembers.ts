"use client"
import { Member } from '@/types';
import { showErrorNotification } from "@/utils/notifications";

type fetchTeamMembersProps = {
  setMembers: (members: Member[]) => void;
}

export  const fetchTeamMembers = async ({setMembers}: fetchTeamMembersProps) => {
  try {
    const response = await fetch(`/features/teamJoin/api/getTeamMembers`);
    const data = await response.json();
    setMembers(data.members)
  } catch (error) {
    console.error(error);
    showErrorNotification('データの取得に失敗しました');
  }
}

