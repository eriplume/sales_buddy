import { formatCurrency } from "@/utils/currencyUtils";
import { UserIcon,ShoppingBagIcon, CurrencyYenIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/solid";
import { SolidShirtIcon } from "../../ui/icon/ShirtIcon";

type MonthlyRecordProps = {
  amount: number;
  number: number; 
  count: number;
  setRate: number;
  average: number;
  days: number;
};

export default function MonthlyRecord({amount, number, count, setRate, average, days} :MonthlyRecordProps) {
  return (
    <>
      <div className="flex flex-row justify-center items-center px-7 md:px-12">
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <CurrencyYenIcon className="w-8 h-8"/>
            <div className='text-xs md:text-sm text-gray-600 mt-1'>売上金額</div>
            <div className='text-md md:text-lg text-gray-800 mt-1 font-bold'>{formatCurrency(amount)}</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <ShoppingBagIcon className="w-8 h-8" />
            <div className='text-xs md:text-sm text-gray-600 mt-1'>セット率</div>
            <div className='text-md md:text-lg text-gray-800 mt-1 font-bold'>{setRate.toFixed(1)}</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <UserIcon className="w-8 h-8" />
            <div className='text-xs md:text-sm text-gray-600 mt-1'>客単価</div>
            <div className='text-md md:text-lg text-gray-800 mt-1 font-bold'>{formatCurrency(average)}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center md:justify-end items-center px-10 md:px-12 md:mr-5 text-md md:text-lg text-gray-600 pb-4">
        <div className='text-gray-700 font-bold'>{days}</div>
        <div className='text-gray-700 ml-1'>days</div>
        <div className='text-gray-700 ml-2'>total：</div>
        <div className="flex flex-row ml-2">
          <UsersIcon className="w-6 h-6 p-1 text-gray-400" />
          <div className='text-gray-700 font-bold'>{count}</div>
          <div className='text-gray-700'>人</div>
        </div>
        <div className="flex flex-row ml-2">
          <SolidShirtIcon className="w-5 h-6 mr-1 text-gray-400" />
          <div className='text-gray-700 font-bold'>{number}</div>
          <div className='text-gray-700'>点</div>
        </div>
      </div>
    </>
  )
}
