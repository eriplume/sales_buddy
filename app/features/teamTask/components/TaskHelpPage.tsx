import Link from "next/link"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function TaskHelpPage() {
  return (
    <div className="p-2">
      <div className="flex items-center text-gray-700 underline pt-2">
        <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
        タスクについて
      </div>
      <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
        <p>左側のボタンから追加できます。</p>
        <p>店舗単位で行うタスクなのか、個人タスクなのか選択してください</p>
      </div> 
        
      <div className="flex items-center text-gray-700 underline border-t pt-2">
        <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
        タスク一覧について
      </div>
      <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
        <p className="mb-1">ページ上部のタブ左側から、</p>
        <p> - メンバーが登録した全てのタスク</p>
        <p> - メンバーが登録したチームタスク</p>
        <p className="mb-1"> - 自分が登録したタスク</p>
        <p>がそれぞれ表示されます。</p>
      </div>

      <div className="flex items-center text-gray-700 border-t underline pt-2">
        <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
        タスクの通知機能について
      </div>
      <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
        <p>メンバーによってチームタスクが登録されるとLINEで通知が届きます。</p>
        <Link href='/setting' className="text-sky-800 underline font-bold">こちらから</Link>
        <span>通知の設定を行ってください。</span>
      </div>         
    </div>
  )
}
