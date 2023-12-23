import ThisWeek from './ThisWeek'
import { ChartBarIcon, ChartPieIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function ProgressArea() {
  return (
    <>
      <div className="flex flex-col w-full max-w-lg mb-3 pb-2">
        <ThisWeek/>

        <div className="flex flex-row justify-center items-center h-20 md:h-28 md:pb-3 md:mx-2 lg:mx-10">
          <div className="w-1/3 mx-2">
            <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:mt-1'>
              <ChartPieIcon className="w-8 h-8"/>
              <div className='text-xs text-gray-600 mt-1'>客層</div>
            </div>
          </div>
          <div className="w-1/3 mx-2">
          <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:mt-1'>
              <ChartBarIcon className="w-8 h-8" />
              <div className='text-xs text-gray-600 mt-1'>売上実績</div>
            </div>
          </div>
          <div className="w-1/3 mx-2">
          <div className='flex flex-col justify-center items-center text-gray-400 hover:text-sky-700 p-5 md:p-6 bg-white shadow-md rounded-md hover:mt-1'>
              <BookOpenIcon className="w-8 h-8" />
              <div className='text-xs text-gray-600 mt-1'>レポート</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
