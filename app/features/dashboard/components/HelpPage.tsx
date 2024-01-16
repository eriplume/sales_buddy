import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function HelpPage() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          週間進捗エリア
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>まずは今週の目標を登録。</p>
          <p>目標達成できるように頑張りましょう！</p>
        </div> 
        
        <div className="flex items-center text-gray-700 underline border-t pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          売上記録カレンダー
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>日付を選択して売上データを記録 or 確認。</p>
          <p>記録する度に売上データがアプリ内の各コンテンツに反映されます。</p>
        </div>

        <div className="flex items-center text-gray-700 border-t underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          業務記録カレンダー
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>日付を選択して行った業務を記録 or 確認。</p>
          <p>一度入力した業務は記憶されるので２度目からはサクサク入力！</p>
        </div>         
      </div>
    </>
  )
}