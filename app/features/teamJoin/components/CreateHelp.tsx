import { CheckBadgeIcon } from "@heroicons/react/24/outline"

export default function CreateHelp() {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center text-gray-700 underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          チーム作成について
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>1チームにのみ所属が可能です。</p>
          <p className="text-red-400">⚠️ 既にチームに所属している場合そのチームからは削除されます</p>
        </div>       
        <div className="flex items-center text-gray-700 underline pt-2">
          <CheckBadgeIcon className="w-6 h-6 text-blue-300 mr-2 font-bold" />
          招待について
        </div>
        <div className="py-1 ml-8 text-sm text-gray-700 pb-2">
          <p>作成者の方は招待したいメンバーにチーム名とキーワードを共有してください。</p>
          <p className="text-red-400">⚠️ チーム作成後、チーム名及びキーワードの変更はできません</p>
          <p className="text-red-400">⚠️ 作成者様でキーワードの管理をお願い致します</p>
        </div> 
      </div>
    </>
  )
}