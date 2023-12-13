import useCalculationStore from '@/store/calculationStore';
import dayjs from 'dayjs';
import { FlagIcon } from "@heroicons/react/24/solid";

export default function CurrentDate() {
    const { selectedDate } = useCalculationStore();

  // 日付のフォーマットを表示用にする
  const formattedSelectedDate = dayjs(selectedDate).format("YYYY / MM / DD   ( ddd )");

  return (
    <div className="flex flex-row justify-center items-center w-full">
        <FlagIcon className="w-5 h-5 text-gray-500 mr-2"/>
        { formattedSelectedDate }
    </div>
  )
}
