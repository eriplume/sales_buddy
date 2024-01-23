"use client"
import useFetchUser from "@/app/features/user/hooks/useUser";
import useUserStore from "@/store/userStore";
import TeamTask from "./TeamTask";
import TeamIntroduction from "./TeamIntroduction";
import Loading from "../ui/Loading";

export default function Teams() {
  useFetchUser();
  const { team } = useUserStore();

  if (team === undefined) {
    return <Loading size="md"/>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        {team === "default" ? <TeamIntroduction /> : <TeamTask /> }
      </div>
    </>
  )
}
