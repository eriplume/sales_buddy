"use client"
import { useEffect } from "react";
import { showSuccessNotification } from "@/utils/notifications";
import ThisWeek from "@/app/features/weekProgress/components/ThisWeek";
import { ContentsLink } from "@/app/features/dashboard/components/ContentsLink";
import CalenderArea from "@/app/features/calender/components/CalenderArea";
import { useFetchData } from "@/app/features/dashboard/hooks/useFetchData";

export default function Dashboard() {
  useFetchData();

  useEffect(() => {
  if (localStorage.getItem("justLoggedIn") === "true") {
    showSuccessNotification("ログインしました");
    localStorage.removeItem("justLoggedIn");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-5xl mb-10 md:mt-10 xl:my-20">
        <div className="flex flex-col w-full max-w-lg mb-5 pb-2">
          <ThisWeek/>
          <ContentsLink/>
        </div>
        <CalenderArea/>
      </div>
    </>
  )
}
