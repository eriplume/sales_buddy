"use client"
import useUserStore from "@/store/userStore";
import TaskTab from "@/app/features/teamTask/components/TaskTab";
import TeamIntroduction from "./TeamIntroduction";
import Loading from "../ui/Loading";
import useFetchTask from "@/app/features/teamTask/hooks/useTeamTask";

export default function Teams() {
  useFetchTask();
  const { teamId } = useUserStore();

  if (teamId === undefined) {
    return <Loading size="md"/>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl my-4">
        {teamId === 1 ? <TeamIntroduction /> : <TaskTab /> }
      </div>
    </>
  )
}
