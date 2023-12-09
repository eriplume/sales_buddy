import useCalculationStore from '@/store/calculationStore';
import { UserIcon, CurrencyYenIcon, UsersIcon} from "@heroicons/react/24/outline";

export default function CurrentData() {

  const { totalAmount, totalNumber, customerCount, customers } = useCalculationStore();

  return (
    <>
      <div className="flex flex-row justify-center w-full">

        <div className="flex flex-col justify-center py-2 px-8">
          <UserIcon className="w-8 h-8 mx-auto"/>
          <p className="text-xs mx-auto">
            客数
          </p>
          <div className="flex flex-row items-center whitespace-nowrap">
            <h2 className="title-font font-medium text-xl text-gray-900">
              {customerCount}客
            </h2>
            <UsersIcon  className="w-5 h-5 font-bold ml-2" />
          </div>
        </div>

  
        <div className="flex flex-col justify-center py-2 px-8 border-l border-gray-200">
          <UserIcon className="w-8 h-8 mx-auto"/>
          <p className="flex text-xs mx-auto">
            点数
          </p>
          <div className="flex flex-row items-center whitespace-nowrap">
            <h2 className="title-font font-medium text-xl text-gray-900">
              {totalNumber}点
            </h2>
          </div>
        </div>
  
        <div className="flex flex-col justify-center py-2 px-8 border-l border-gray-200">
          <CurrencyYenIcon className="w-8 h-8 mx-auto"/>
          <p className="flex text-xs mx-auto">
            金額
          </p>
          <div className="flex flex-row items-center whitespace-nowrap">
            <h2 className="title-font font-medium text-xl text-gray-900">
              ￥{totalAmount}
            </h2>
          </div>
        </div>

      </div>
    </>
  )
}
