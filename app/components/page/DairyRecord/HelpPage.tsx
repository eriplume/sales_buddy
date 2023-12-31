import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function HelpPage() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          入力エリア
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          レシートごとに、フォームに沿って各値を入力してください。すべて入力必須です。
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          加算するボタン
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          ボタンを押すと現在の合計値に入力値が加算されます。入力→加算ボタンをレシート分繰り返してください。
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          登録ボタン
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          日付, 現在の合計値を確認したら登録ボタンを押して売上データを登録！登録したデータはダッシュボードのカレンダーから確認できます。 
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-3">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          クリアボタン
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          現在の合計値がリセットされます。
        </div>
      </div>
    </>
  )
}
