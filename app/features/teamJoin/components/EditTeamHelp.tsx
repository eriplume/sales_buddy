import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function EditTeamHelp() {
  return (
    <div className="p-2">
      <div className="flex items-center text-gray-700 underline pt-2">
        <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
        チームの変更について
      </div>
      <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
        <p>所属できるチームは１チームのみです。</p>
        <p className="text-red-400">⚠️ 現在の所属チームからは削除されます</p>
        <p className="text-red-400">⚠️ 再度参加する際はチーム作成者の方の招待が必要になります</p>
      </div>       
    </div>
  )
}
