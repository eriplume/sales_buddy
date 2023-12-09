"use client"
import { Fieldset } from '@mantine/core';
import CurrentData from './CurrentData';
import ClearButton from '../../ui/ClearButton';
import SubmitButton from '../../ui/SubmitButton';

export default function Submit() {
  return (
    <>
    <Fieldset legend="現在入力されている合計" className='w-full mt-3 max-w-lg' style={{ overflowX: 'auto' }}>
      <div className="flex flex-col space-y-4 w-full">
        <CurrentData/>
        <div className="flex justify-end mt-4 gap-3">
          <ClearButton />
          <SubmitButton/>
        </div>
      </div>
    </Fieldset>
  </>
  )
}
