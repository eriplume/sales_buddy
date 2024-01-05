import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function HelpPage() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          週間レポートの登録
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>今週の振り返りを入力しましょう。</p>
          <p className="text-red-400">⚠️ 実績は『今週のみ』確認可能です。</p>
          <p className="text-red-400">⚠️ 先週以前の実績はダッシュボードより確認してください。</p>
        </div>

        <div className="flex items-center text-gray-700 underline border-t pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          次週の目標設定
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>振り返りをしたついでに次週の目標も設定しておきましょう。</p>
          <p>あとで設定したい場合はスキップボタンを押してください。</p>
        </div>  
      </div>
    </>
  )
}