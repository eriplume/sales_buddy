import RouterButton from "../../ui/button/RouterButton";
import { ArrowTrendingUpIcon, FlagIcon } from "@heroicons/react/24/solid";

type WeeklyProgressProps = {
    target: number | null;
    amount: number;
};

export default function WeeklyProgress({ target, amount }:WeeklyProgressProps ) {

  const formatCurrency = (amount :number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(amount);
  }

  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700">
          <FlagIcon className="w-6 h-6 text-sky-800 mr-2" />
          今週の目標
        </div>
        {target !== 0 ? (
          <div className="py-1 text-lg font-bold">￥{target}万</div>
        ) : (
          <div className="pt-2 pb-1 ml-1">
            <RouterButton size="xs" path="/weekly">登録する</RouterButton>
          </div>
        )}
        <div className="flex items-center text-gray-700 border-t mt-2 pt-2">
          <ArrowTrendingUpIcon className="w-6 h-6 text-sky-800 mr-2" />
          現在の売上
        </div>
        <div className="py-1 ml-1 text-lg font-bold text-sky-800">{formatCurrency(amount)}</div>
      </div>
    </>
  )
}
  