"use client"
import { useFetchForCalculator } from '@/lib/useFetchData';
import { Fieldset } from '@mantine/core';
import RecordInputForm from './RecordInputForm';
import Datepicker from './DatePicker';

export default function Caluculator() {

  useFetchForCalculator();

  return (
    <>
    <div className="flex flex-col w-full max-w-lg">
      <Fieldset legend="日付を選択" className='flex w-full'>
        <div className="felx space-y-4 w-full px-2 mx-auto">
          <Datepicker/>
        </div>
      </Fieldset>
      <Fieldset legend="レシートから値を入力" className='w-full mt-3'>
        <div className="flex space-y-4 w-full">
          <RecordInputForm/>
        </div>
      </Fieldset>
      </div>
    </>
  )
}
