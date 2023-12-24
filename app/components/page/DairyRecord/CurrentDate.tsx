import useCalculationStore from '@/store/calculationStore';
import { formatDateLayout } from '@/utils/dateUtils';
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function CurrentDate() {
  const { selectedDate } = useCalculationStore();

  const formattedSelectedDate = formatDateLayout(selectedDate);

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-row items-center border-b-4 border-gray-100 p-1">
        <CalendarIcon className="w-6 h-6 text-gray-500 mr-2 ml-4"/>
        <div className='text-lg mr-4 text-gray-600'>{ formattedSelectedDate }</div>
      </div>
    </div>
  )
}
