import { formatCurrency } from "@/utils/currencyUtils";
import { UserIcon,ShoppingBagIcon, CurrencyYenIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/solid";
import { SolidShirtIcon } from "../../ui/icon/ShirtIcon";

type WeeklyRecordContents = {
  amount: number;
  number: number;
  count: number;
  setRate: number
  average: number;
}

export default function WeeklyRecordContents({ amount, number, count, setRate, average}: WeeklyRecordContents) {
  return (
    <div className="p-2">
      <div className="flex items-center text-gray-700">
        <CurrencyYenIcon className="w-6 h-6 text-sky-800 mr-2" />
        売上金額
      </div>
      <div className="py-1 ml-8 text-md text-gray-700 font-bold">{formatCurrency(amount)}</div>
      <div className="flex items-center text-gray-700 border-t mt-2 pt-3">
        <ShoppingBagIcon className="w-6 h-6 text-sky-800 mr-2"/>
        セット率
      </div>
      <div className="flex flex-row">
        <div className="py-1 ml-8 text-gray-700 text-md font-bold">{setRate.toFixed(1)}</div>
        <div className="flex flex-row items-center py-1 text-lg font-bold text-gray-600">
          <p className="px-4 md:px-5">/</p>
          <div><SolidShirtIcon className="w-5 h-5 text-gray-600 mr-2" /></div>
          <p>{number} 点</p>
        </div>
      </div>
      <div className="flex flex-row items-center text-gray-700 border-t mt-2 pt-3">
        <UserIcon className="w-6 h-6 text-sky-800 mr-2" />
        客単価
      </div>
      <div className="flex flex-row">
        <div className="py-1 ml-8 text-gray-700 text-md font-bold">{formatCurrency(average)}</div>
        <div className="flex flex-row items-center py-1 text-lg font-bold text-gray-600">
          <p className="px-2 md:px-5">/</p>
          <div><UsersIcon  className="w-5 h-5 text-gray-600 mr-2"/></div>
          <p>{count} 人</p>
        </div>
      </div>
    </div>
  )
}
