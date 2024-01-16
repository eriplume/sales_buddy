"use client"
import useCalculationStore from "@/store/calculationStore";
import { showErrorNotification } from "@/utils/notifications";
import { TriangleIcon } from "../../../components/ui/icon/Triangle";
import SubmitButton from "../../../components/ui/button/SubmitButton";
import ClearButton from "../../../components/ui/button/ClearButton";
import CurrentData from "@/app/features/dairyrecord/components/CurrentData";
import CurrentDate from "@/app/features/dairyrecord/components/CurrentDate";
import CustomersList from "@/app/features/dairyrecord/components/CustomersList";

export default function DemoSubmitArea() {
  const { clearData, submitData } = useCalculationStore();
  
  const handleSubmit = () => {
    const { customer_counts } = submitData();

    if (Object.keys(customer_counts).length === 0) {
      const isConfirmed = confirm("売上が0です。本当に登録しますか？");
      if (!isConfirmed) {
        return;
      }
    }
    showErrorNotification('登録にはログインが必要です');
  };

  return (
    <>
      <div className='w-full mt-3 max-w-lg bg-white text-gray-500 rounded-sm border pt-3 md:mt-5 shadow-md'>
        <div className="flex flex-row items-center px-6">
          <TriangleIcon className="w-4 h-4 text-blue-300 mr-2"/>
          <div className='flex flex-row mt-1 mr-2'>
            <div className="text-xs mr-1">STEP3.</div>
            <div className="text-xs text-gray-800 mr-16">現在の合計値</div>
          </div>
        </div>
        <div className="bg-white px-7 pb-3 flex flex-col">
          <div className="flex flex-col px-2 pb-3 pt-5 space-y-5 w-full">
            <CurrentDate/>
            <CurrentData/>
            {/* md以上のみ表示 */}
            <div className="hidden md:block"> 
              <CustomersList/>
            </div>
            <div className="flex justify-center mt-4 gap-4">
              <ClearButton size="sm" onClick={clearData}/>
              <SubmitButton size="sm" type="submit" onClick={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  
