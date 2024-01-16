import Link from 'next/link';
import { ChartBarIcon, ChartPieIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export function ContentsLink() {
  return (
    <div className="flex flex-row justify-center items-center h-20 md:h-28 md:pb-3 md:mx-2 lg:mx-10">
      <div className="w-1/3 mx-2">
      <Link href="/dashboard/customergraph">
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <ChartPieIcon className="w-8 h-8"/>
          <div className='text-xs text-gray-600 mt-1'>客層</div>
        </div>
      </Link>
      </div>
      <div className="w-1/3 mx-2">
      <Link href='/dashboard/achievements'>
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <ChartBarIcon className="w-8 h-8" />
          <div className='text-xs text-gray-600 mt-1'>月間実績</div>
        </div>
        </Link>
      </div>
      <div className="w-1/3 mx-2">
      <Link href='/dashboard/report'>
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <BookOpenIcon className="w-8 h-8" />
          <div className='text-xs text-gray-600 mt-1'>レポート</div>
        </div>
      </Link>
      </div>
    </div>
  )
}

export function ContentsLinkDemo() {
  return (
    <div className="flex flex-row justify-center items-center h-20 md:h-28 md:pb-3 md:mx-2 lg:mx-10">
      <div className="w-1/3 mx-2">
      <Link href="/sample/dashboard/customergraph">
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <ChartPieIcon className="w-8 h-8"/>
          <div className='text-xs text-gray-600 mt-1'>客層</div>
        </div>
      </Link>
      </div>
      <div className="w-1/3 mx-2">
      <Link href='/sample/dashboard/archive'>
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <ChartBarIcon className="w-8 h-8" />
          <div className='text-xs text-gray-600 mt-1'>月間実績</div>
        </div>
        </Link>
      </div>
      <div className="w-1/3 mx-2">
      <Link href='/sample/dashboard/report'>
        <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:shadow-lg hover:shadow-md md:hover:translate-y-1 hover:text-sky-700 transition-transform cursor-pointer'>
          <BookOpenIcon className="w-8 h-8" />
          <div className='text-xs text-gray-600 mt-1'>レポート</div>
        </div>
      </Link>
      </div>
    </div>
  )
}