import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function HelpPage() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          週間レポート一覧
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>登録した過去の週間レポートを月毎に表示します。</p>
          <p>各レポートはコピーボタンでコピー可能です。</p>
        </div>
        <div className="flex items-center text-gray-700 underline border-t pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          月間レポートの作成について
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>週間レポートを要約し月間レポートを自動で作成します。</p>
          <p className="text-red-400">⚠️ 月間レポートの作成には3週分以上の週間レポートが必要です。</p>
        </div>
        <div className="flex items-center text-gray-700 underline border-t pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          月間レポートの編集について
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>AIが作成した文章を元に300字以内で編集可能です。</p>
        </div>  
      </div>
    </>
  )
}