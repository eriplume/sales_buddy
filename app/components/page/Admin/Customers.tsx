import CustomersTable from '@/app/features/admin/components/CustomersTable'
import { ChartPieIcon } from '@heroicons/react/24/outline'

export default function Customers() {
  return (
    <>
      <div className='flex flex-row items-center text-lg text-gray-500 p-2 mb-3 border-b-4'>
        <ChartPieIcon className='w-6 h-6 text-gray-500 mr-2'/>
        <div>客層タイプ管理</div>
      </div>
      <CustomersTable/>
    </>
  )
}
