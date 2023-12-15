"use client"
import Calender from "@/app/components/page/DashBoard/Calendar";
import ThisWeek from "@/app/components/page/DashBoard/ThisWeek";
import { useFetchData } from "@/lib/useFetchData";

export default function Dashboard() {
  useFetchData();
  
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto p-6 z-0 md:gap-x-6 max-w-5xl my-10">
      <div className="p-7 shadow-md">
        <ThisWeek/>
      </div>
      <div className="bg-white p-7 shadow-md">
        <Calender/>
      </div>
    </div>
    </>
  )
}
