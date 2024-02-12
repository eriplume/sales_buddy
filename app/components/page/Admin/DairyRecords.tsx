import DairyRecordsTable from "@/app/features/admin/components/DairyRecordsTable";
import { CurrencyYenIcon } from "@heroicons/react/24/outline";

export default function DairyRecords() {
  return (
    <>
      <div className='flex flex-row items-center text-lg text-gray-500 p-2 mb-3 border-b-4'>
        <CurrencyYenIcon className='w-6 h-6 text-gray-500 mr-2'/>
        <div>売上レコード管理</div>
      </div>
      <DairyRecordsTable/>
    </>
  )
}
