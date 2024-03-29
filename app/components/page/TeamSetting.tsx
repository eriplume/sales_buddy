"use client"
import useUserStore from "@/store/userStore";
import Loading from "../ui/Loading";
import EditJoinTeam from "@/app/features/teamJoin/components/EditJoinTeam"
import TeamIntroduction from "@/app/features/teamJoin/components/TeamIntroduction";

export default function TeamSetting() {
  const { teamId } = useUserStore();

  if (teamId === undefined) {
    return <Loading size="md"/>;
  }
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl my-20">
      {teamId === 1 || teamId === null ? <TeamIntroduction /> : <EditJoinTeam/> }
    </div>
  )
}
