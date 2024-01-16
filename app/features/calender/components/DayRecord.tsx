import { SalesRecord } from "@/types";
import { formatCurrency } from "@/utils/currencyUtils";
import {  CurrencyYenIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon,UserIcon,UsersIcon } from "@heroicons/react/24/solid";
import { SolidShirtIcon } from "../../../components/ui/icon/ShirtIcon";

type DayRecordProps = {
  record: SalesRecord;
};

export default function DayRecord({ record }: DayRecordProps) {

  return (
    <>
      <div className="p-4 border-t-4">
        <div className="flex items-center text-gray-700">
          <CurrencyYenIcon className="w-6 h-6 text-sky-800 mr-2" />
          売上金額
        </div>
        <div className="py-1 ml-8 text-lg text-gray-700 font-bold">{formatCurrency(record.total_amount)}</div>
        <div className="flex flex-row items-center text-gray-700 border-t mt-2 pt-3">
          <UserIcon className="w-6 h-6 text-sky-800 mr-2" />
          客単価
        </div>
        <div className="flex flex-row">
          <div className="py-1 ml-8 text-gray-700 text-lg font-bold">{formatCurrency(record.average_spend)}</div>
          <div className="flex flex-row items-center py-1 ml-8 text-lg font-bold text-gray-600">
            <p className="px-4">/</p>
            <div><UsersIcon  className="w-5 h-5 text-gray-600 mr-2"/></div>
            <p>{record.count} 人</p>
          </div>
        </div>
        <div className="flex items-center text-gray-700 border-t mt-2 pt-3">
          <ShoppingBagIcon className="w-6 h-6 text-sky-800 mr-2"/>
          セット率
        </div>
        <div className="flex flex-row">
          <div className="py-1 ml-8 text-gray-700 text-lg font-bold">{record.set_rate.toFixed(1)}</div>
          <div className="flex flex-row items-center py-1 ml-8 text-lg font-bold text-gray-600">
            <p className="px-4">/</p>
            <div><SolidShirtIcon className="w-5 h-5 text-gray-600 mr-2" /></div>
            <p>{record.total_number} 点</p>
          </div>
        </div>
      </div>
    </>
  )
}
