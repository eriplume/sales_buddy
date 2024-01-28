import UsersTable from '@/app/features/admin/components/UsersTable'
import { UsersIcon } from '@heroicons/react/24/outline'

export default function Users() {
  return (
    <>
      <div className='flex flex-row items-center text-lg text-gray-500 p-2 mb-3 border-b-4'>
        <UsersIcon className='w-6 h-6 text-gray-500 mr-2'/>
        <div>ユーザー管理</div>
      </div>
      <UsersTable/>
    </>
  )
}
