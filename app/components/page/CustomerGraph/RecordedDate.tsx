"use client"
import useDashboardStore from "@/store/dashboardStore";
import { PencilIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function RecordedDate() {

  const { salesDates } = useDashboardStore();
  const { customersRecord } = useDashboardStore();

  const oldestDate = salesDates[0];
  const totalCustomers = Object.values(customersRecord).reduce((sum, count) => sum + count, 0);


  return (
    <div className="flex flex-col md:flex-row text-sm text-gray-500 pl-5 mt-6">
      <div className="flex flex-row">
        <PencilIcon className="w-5 h-5 mx-2 text-gray-500 "/>
        集計開始日：{oldestDate} ~
      </div>
      <div className="flex flex-row md:ml-5 mt-1 md:mt-0">
        <UsersIcon className="w-5 h-5 mx-2 text-gray-500 "/>
        total：{totalCustomers}客
      </div>
    </div>
  )
}
