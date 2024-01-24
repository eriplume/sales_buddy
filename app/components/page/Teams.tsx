"use client"
import useFetchUser from "@/app/features/user/hooks/useUser";
import useUserStore from "@/store/userStore";
import TeamTask from "../../features/teamTask/components/TaskTab";
import TeamIntroduction from "./TeamIntroduction";
import Loading from "../ui/Loading";
import useFetchTask from "@/app/features/teamTask/hooks/useTeamTask";

export default function Teams() {
  useFetchUser();
  useFetchTask();
  const { teamId } = useUserStore();

  if (teamId === undefined) {
    return <Loading size="md"/>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        {teamId === 1 ? <TeamIntroduction /> : <TeamTask /> }
      </div>
    </>
  )
}
