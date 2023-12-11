"use client"
import useCalculationStore from '@/store/calculationStore';
import { Fieldset } from '@mantine/core';
import CurrentData from './CurrentData';
import ClearButton from '../../ui/ClearButton';
import SubmitButton from '../../ui/SubmitButton';
import CurrentDate from './CurrentDate';
import CustomersList from './CustomersList';

export default function Submit() {
  const { clearData, submitData } = useCalculationStore();

  return (
    <>
      <Fieldset legend="現在の合計" className='w-full mt-3 max-w-lg' style={{ overflowX: 'auto' }}>
        <div className="flex flex-col space-y-4 w-full">
          <CurrentDate/>
          <CurrentData/>

          {/* md以上のみ表示 */}
          <div className="hidden md:block"> 
            <CustomersList/>
          </div>

          <div className="flex justify-end mt-4 gap-3">
            <ClearButton onClick={clearData}/>
            <SubmitButton onClick={submitData}/>
          </div>
        </div>
      </Fieldset>
    </>
  )
}
