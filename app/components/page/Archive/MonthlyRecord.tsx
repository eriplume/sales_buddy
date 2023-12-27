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
};

export default function MonthlyRecord({amount, number, count, setRate, average} :MonthlyRecordProps) {
  return (
    <>
      <div className="flex flex-row justify-center items-center px-7 md:px-12">
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <CurrencyYenIcon className="w-8 h-8"/>
            <div className='text-xs text-gray-600 mt-1'>金額</div>
            <div className='text-lg text-gray-800 mt-1 font-bold'>{formatCurrency(amount)}</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <ShoppingBagIcon className="w-8 h-8" />
            <div className='text-xs text-gray-600 mt-1'>セット率</div>
            <div className='text-lg text-gray-800 mt-1 font-bold'>{setRate.toFixed(1)}</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className='flex flex-col justify-center items-center text-gray-400 p-5'>
            <UserIcon className="w-8 h-8" />
            <div className='text-xs text-gray-600 mt-1'>客単価</div>
            <div className='text-lg text-gray-800 mt-1 font-bold'>{formatCurrency(average)}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center px-10 md:px-12 mr-2 text-lg text-gray-500">
        <div>total：</div>
        <div className="flex flex-row ml-1">
          <UsersIcon className="w-7 h-7 p-1 text-gray-400" />
          <div className='text-gray-900'>{count}人</div>
        </div>
        <div className="flex flex-row ml-2">
          <SolidShirtIcon className="w-6 h-7 mr-1 text-gray-400" />
          <div className='text-gray-900'>{number}点</div>
        </div>
      </div>
    </>
  )
}
