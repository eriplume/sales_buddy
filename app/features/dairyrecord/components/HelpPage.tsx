import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function HelpPage() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          STEP1. 日付の選択
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>登録する日付を選択。</p>
          <p>既に登録済みの日は選択できません。</p>
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          STEP2. 入力エリア
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>フォームに沿ってレシートの内容を入力してください。</p>
          <p>加算ボタンを押すと現在の合計値に加算されます。</p>
          <p>レシート分こちらを繰り返します。</p>
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          STEP3. 現在の合計値エリア
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>入力内容を確認して登録！</p>
          <p>クリアボタンを押すと現在の合計値がリセットされます。</p>
        </div>
      </div>
    </>
  )
}
