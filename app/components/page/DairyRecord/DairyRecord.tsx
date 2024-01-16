"use client"
import { useFetch } from "@/app/features/dairyrecord/hooks/useCalculator"
import useDashboardStore from "@/store/dashboardStore"
import Caluculator from "@/app/features/dairyrecord/components/Caluculator"
import SubmitArea from "@/app/features/dairyrecord/components/SubmitArea"

export default function DairyRecord() {
  useFetch();
  const { salesDates } = useDashboardStore();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-4xl my-10 xl:my-20">
      <Caluculator salesDates={salesDates}/>
      <SubmitArea />
    </div>
  )
}
