import WeeklyReportsTable from '@/app/features/admin/components/WeeklyReportsTable'
import { BookOpenIcon } from '@heroicons/react/24/outline'

export default function WeeklyReports() {
  return (
    <>
      <div className='flex flex-row items-center text-lg text-gray-500 p-2 mb-3 border-b-4'>
        <BookOpenIcon className='w-6 h-6 text-gray-500 mr-2'/>
        <div>週間レポート管理</div>
      </div>
      <WeeklyReportsTable/>
    </>
  )
}
