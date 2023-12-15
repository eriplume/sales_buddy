import useCalculationStore from '@/store/calculationStore';
import { FlagIcon } from "@heroicons/react/24/solid";
import { formatDateLayout } from '@/utils/dateUtils';

export default function CurrentDate() {
  const { selectedDate } = useCalculationStore();

  const formattedSelectedDate = formatDateLayout(selectedDate);

  return (
    <div className="flex flex-row justify-center items-center w-full">
        <FlagIcon className="w-5 h-5 text-gray-500 mr-2"/>
        { formattedSelectedDate }
    </div>
  )
}
