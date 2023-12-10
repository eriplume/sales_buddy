import useCalculationStore from '@/store/calculationStore';
import { UserIcon, CurrencyYenIcon, UsersIcon} from "@heroicons/react/24/outline";
import ShirtIcon from '../../ui/icon/ShirtIcon';

export default function CurrentData() {
  const { totalAmount, totalNumber, customerCount, customers } = useCalculationStore();
  
  return (
    <>
      <div className="flex flex-row justify-center w-full">

        <div className="flex flex-col justify-center py-2 px-8">
          <UserIcon className="w-8 h-8 mx-auto text-gray-500"/>
          <p className="text-xs mx-auto text-gray-400">
            客数
          </p>
          <div className="flex flex-row items-center whitespace-nowrap mt-2">
            <h2 className="title-font font-medium text-xl text-gray-600">
              {customerCount}
            </h2>
            <UsersIcon  className="w-5 h-5 ml-2 text-gray-400" />
          </div>
        </div>
  
        <div className="flex flex-col justify-center py-2 px-8 border-l border-gray-200">
          <ShirtIcon className="w-8 h-8 mx-auto text-gray-500"/>
          <p className="flex text-xs mx-auto text-gray-400">
            点数
          </p>
          <div className="flex flex-row items-center justify-center whitespace-nowrap mt-2">
            <h2 className="title-font font-medium text-xl text-gray-600">
              {totalNumber}
            </h2>
          </div>
        </div>
  
        <div className="flex flex-col justify-center py-2 px-8 border-l border-gray-200">
          <CurrencyYenIcon className="w-8 h-8 mx-auto text-gray-500"/>
          <p className="flex text-xs mx-auto text-gray-400">
            金額
          </p>
          <div className="flex flex-row items-center whitespace-nowrap mt-2">
            <h2 className="title-font font-medium text-xl text-gray-600">
              ￥ {totalAmount}
            </h2>
          </div>
        </div>

      </div>
    </>
  )
}