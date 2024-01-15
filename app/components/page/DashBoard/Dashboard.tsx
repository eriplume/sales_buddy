"use client"
import { useEffect } from "react";
import { showSuccessNotification } from "@/utils/notifications";
import ProgressArea from "./ProgressArea";
import CalenderArea from "./CalenderArea";

export default function Dashboard() {

  useEffect(() => {
  if (localStorage.getItem("justLoggedIn") === "true") {
    showSuccessNotification("ログインしました");
    localStorage.removeItem("justLoggedIn");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-5xl mb-10 md:mt-10 xl:my-20">
        <ProgressArea/>
        <CalenderArea/>
      </div>
    </>
  )
}
