import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function JoinHelp() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          チームへの参加について
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>1チームにのみ所属が可能です。</p>
          <p className="text-red-400">⚠️ 既にチームに所属している場合そのチームからは削除され、新しいチームへの所属となります</p>
        </div>       
      </div>
    </>
  )
}