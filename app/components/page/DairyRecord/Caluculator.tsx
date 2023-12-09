"use client"
import { Fieldset } from '@mantine/core';
import RecordInputForm from './RecordInputForm';
import Datepicker from './DatePicker';

export default function Caluculator() {
  return (
    <>
      <Fieldset legend="日付を選択" className='flex w-full'>
        <div className="felx space-y-4 w-full px-2 mx-auto">
          {/* レシート内容の入力 */}
          <Datepicker/>
        </div>
      </Fieldset>
      <Fieldset legend="レシートから値を入力" className='w-full mt-3'>
        <div className="flex space-y-4 w-full">
          {/* レシート内容の入力 */}
          <RecordInputForm/>
        </div>
      </Fieldset>
    </>
  )
}
