"use client"
import { useRouter } from 'next/navigation'
import { HomeIcon } from "@heroicons/react/24/outline";

type BreadcrumbsProps = {
  children: string;
}

export default function Breadcrumbs({ children }: BreadcrumbsProps) {
  const router = useRouter()

  return (
    <div className='flex flex-row items-center px-2 pt-4 max-w-lg mx-auto'>
      <div className='flex flex-row text-gray-400 items-center hover:underline hover:text-sky-800 cursor-pointer' onClick={() => router.push('/dashboard')}>
        <HomeIcon className="w-4 h-4 mr-1" />
        <div>dashboard</div>
      </div>
      <div className='text-xs text-gray-400 mx-2'>＜</div>
      <div className='text-sky-700 cursor-pointer'>{children}</div>
    </div>
  )
}
