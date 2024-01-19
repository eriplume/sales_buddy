import { UsersIcon } from "@heroicons/react/24/outline"
import Form from "@/app/features/teamJoin/components/Form"

export default function OrganizeTeam() {

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">
        <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-5">
          <UsersIcon className="w-6 h-6 text-gray-500 mr-1"/>
          <span className="mx-1 text-lg text-gray-700">チームを作る</span>
        </div>
        <div className="flex space-y-4 w-full p-2 mx-auto">
          <Form apiEndpoint="createTeam"/>
        </div>
      </div>
    </div>
  )
}
