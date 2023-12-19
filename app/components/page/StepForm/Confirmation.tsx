import { PencilIcon } from '@heroicons/react/24/outline';

export default function Confirmation() {
  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">

      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <PencilIcon className="w-5 h-5 text-gray-500 mr-2"/>
        <span className="mx-1 text-sm text-gray-500">入力内容を確認して登録</span>
      </div>
      
      <div className="flex flex-row justify-center items-center w-full pb-2">
        <div className="flex flex-col w-full p-2 mx-aut justify-center">
          <div className='text-sm text-gray-500 ml-1 mb-1'>週間レポート</div>
          <div className="bg-gray-100 w-60 md:w-full h-32 overflow-auto text-xs p-2">
            {/* レポート内容 */}
          </div>
        </div>
      </div>

      <div className="flex space-y-4 w-full mx-auto">
        <div className="flex flex-col w-full p-2 mx-aut justify-center">
          <div className='text-sm text-gray-500 ml-1 mb-1'>目標</div>
            <div className="bg-gray-100 w-60 md:w-full h-10 text-sm p-2">
              {/* 金額：万円 */}
          </div>
        </div>
      </div>
    </div>
  )
}