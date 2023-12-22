import { SalesRecord } from "@/types";
import {  CurrencyYenIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon,UserIcon } from "@heroicons/react/24/solid";

type DayRecordProps = {
  record: SalesRecord;
};

export default function DayRecord({ record }: DayRecordProps) {

  const formatCurrency = (amount :number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  }

  return (
    <>
      <div className="p-4 border-t">
        <div className="mb-2 flex items-center text-gray-700">
          <CurrencyYenIcon className="w-6 h-6 text-gray-500 mr-2" />
          売上金額：
          <span>{formatCurrency(record.total_amount)}</span>
        </div>
        <div className="mb-2 flex items-center text-gray-700">
          <UserIcon className="w-6 h-6 text-gray-500 mr-2" />
          客単価：
          <span>{formatCurrency(record.average_spend)} （客数: {record.count}）</span>
        </div>
        <div className="mb-2 flex items-center text-gray-700">
          <ShoppingBagIcon className="w-6 h-6 text-gray-500 mr-2" />
          セット率：
          <span>{record.set_rate} （点数: {record.total_number}）</span>
        </div>
      </div>
    </>
  )
}
