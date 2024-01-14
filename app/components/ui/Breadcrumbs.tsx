import Link from 'next/link';
import { HomeIcon } from "@heroicons/react/24/outline";

type BreadcrumbsProps = {
  children: string;
};

export function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <div className='flex flex-row items-center px-2 pt-4 max-w-xs md:max-w-lg mx-auto'>
      <Link href='/dashboard' className='flex flex-row text-gray-400 items-center hover:underline hover:text-sky-800 cursor-pointer'>
        <HomeIcon className="w-4 h-4 mr-1" />
        <div>dashboard</div>
      </Link>
      <div className='text-xs text-gray-400 mx-2'>＜</div>
      <div className='text-sky-700 cursor-pointer'>{children}</div>
    </div>
  )
}

export function BreadcrumbsDemo({ children }: BreadcrumbsProps) {
  return (
    <div className='flex flex-row items-center px-2 pt-4 max-w-xs md:max-w-lg mx-auto'>
      <Link href='/sample/dashboard' className='flex flex-row text-gray-400 items-center hover:underline hover:text-sky-800 cursor-pointer'>
        <HomeIcon className="w-4 h-4 mr-1" />
        <div className='text-xs'>ダッシュボード sample</div>
      </Link>
      <div className='text-xs text-gray-400 mx-2'>＜</div>
      <div className='text-sky-700 cursor-pointer text-xs'>{children}</div>
    </div>
  )
}