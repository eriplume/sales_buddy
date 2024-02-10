"use client"
import useTeamStore from "@/store/teamStore"
import Loading from "@/app/components/ui/Loading";
import useFetchTeams from "@/app/features/teamJoin/hooks/useTeams";
import useFetchUser from "@/app/features/user/hooks/useUser";
import useUserStore from "@/store/userStore";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import MemberIcon from "./MemberIcon";

export default function TeamMembers() {
  useFetchUser();
  useFetchTeams();
  const { teamId, teamName } = useUserStore();
  const { members } = useTeamStore();

  if (teamId === undefined) {
    return <Loading size="xs"/>;
  }

  if (teamId === 1 || teamId === null) {
    return (
      <div className="flex flex-row items-center">
        <MegaphoneIcon className='w-6 h-6 lg:ml-5 mr-2 text-gray-400' />
        <div className="text-md">チームに所属していません。</div>
      </div>
    ) 
  }

  return (
    <div className="flex flex-row items-center">
      <div className="mr-2 lg:ml-5 font-bold pr-3 border-r-2 border-gray-200">{teamName}</div>
      {members && members.map((member) => (
        <div key={member.id} className="mr-1">
          <MemberIcon imageUrl={member.imageUrl} userName={member.name} />
        </div>
      ))}
    </div>
  )
}
