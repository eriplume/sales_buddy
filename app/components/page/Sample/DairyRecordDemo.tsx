"use client"
import { useFetchForDemo } from "@/lib/useFetch"
import { salesDatesDemo } from "@/const/demoData";
import Caluculator from "@/app/features/dairyrecord/components/Caluculator"
import DemoSubmitArea from "../Demo/DemoSubmitArea"

export default function DairyRecordDemo() {
  useFetchForDemo();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-4xl my-10 xl:my-15">
      <Caluculator salesDates={salesDatesDemo} />
      <DemoSubmitArea />
  </div>
  )
}
