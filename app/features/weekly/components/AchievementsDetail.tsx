import { formatCurrency } from "@/utils/currencyUtils";
import { CurrencyYenIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon,UserIcon,UsersIcon, FlagIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { SolidShirtIcon } from "../../../components/ui/icon/ShirtIcon";

type AchievementsDetailProps = {
  target: number | null;
  amount: number;
  number: number;
  count: number;
  set: number;
  average: number;
  progressPercent: number;
  progress: number;
};

export default function AchievementsDetail({amount, number, count, set, average, progressPercent, progress} :AchievementsDetailProps) {

  return (
    <div className="p-4 border-t-4"> 
      <div className="flex flex-row items-center text-gray-700">
        <FlagIcon className="w-6 h-6 text-sky-800 mr-2" />
        目標達成率
      </div>
      <div className="flex flex-row">
        {progressPercent >= 100 ? (
          <div className="py-1 ml-8 text-blue-400 text-lg font-bold">{progressPercent.toFixed(1)}%</div>
        ) : (
          <div className="py-1 ml-8 text-red-400 text-lg font-bold">{progressPercent.toFixed(1)}%</div>
        )}
        <div className="flex flex-row items-center py-1 ml-8 text-lg font-bold text-gray-600">
          <p className="px-4">/</p>
          {progress < 0 ? (
            <>
              <div><PlusIcon className="w-5 h-5 text-blue-400"/></div>
              <p>{formatCurrency(Math.abs(progress))}</p>
            </>
          ) : (
            <>
              <div><MinusIcon className="w-5 h-5 text-red-400 mr-1"/></div>
              <p>{formatCurrency(progress)}</p>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center text-gray-700 border-t mt-2 pt-3">
        <CurrencyYenIcon className="w-6 h-6 text-sky-800 mr-2" />
        売上金額
      </div>
      <div className="py-1 ml-8 text-lg text-gray-700 font-bold">{formatCurrency(amount)}</div>
        <div className="flex flex-row items-center text-gray-700 border-t mt-2 pt-3">
          <UserIcon className="w-6 h-6 text-sky-800 mr-2" />
          客単価
      </div>
      <div className="flex flex-row">
        <div className="py-1 ml-8 text-gray-700 text-lg font-bold">{formatCurrency(average)}</div>
        <div className="flex flex-row items-center py-1 ml-8 text-lg font-bold text-gray-600">
          <p className="px-4">/</p>
          <div><UsersIcon  className="w-5 h-5 text-gray-600 mr-2"/></div>
          <p>{count}人</p>
        </div>
      </div>
      <div className="flex items-center text-gray-700 border-t mt-2 pt-3">
        <ShoppingBagIcon className="w-6 h-6 text-sky-800 mr-2"/>
        セット率
      </div>
      <div className="flex flex-row">
        <div className="py-1 ml-8 text-gray-700 text-lg font-bold">{set.toFixed(1)}</div>
        <div className="flex flex-row items-center py-1 ml-8 text-lg font-bold text-gray-600">
          <p className="px-4">/</p>
          <div><SolidShirtIcon className="w-5 h-5 text-gray-600 mr-2" /></div>
          <p>{number}点</p>
        </div>
      </div>
    </div>
  )
}
