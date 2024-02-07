import useUserStore from "@/store/userStore";
import { TriangleIcon } from "@/app/components/ui/icon/Triangle"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import CreateButton from "@/app/features/teamJoin/components/CreateButton";
import JoinButton from "@/app/features/teamJoin/components/JoinButton";
import HelpMordal from "@/app/components/ui/HelpMordal";
import EditTeamHelp from "./EditTeamHelp";

export default function EditJoinTeam() {
  const { teamName } = useUserStore();
  return (
    <>
      <div className="flex flex-col justify-center w-full max-w-lg">
        <div className="bg-white rounded-md py-7 pl-7">
          <div className="flex flex-row justify-start pt-3">
            <TriangleIcon className="w-5 h-5 mr-2 ml-4 text-blue-300" />
            <div className='text-sm text-gray-800 font-bold'>現在の所属チーム</div>
          </div>
          <div className="flex py-3 ml-6">
            <div className="text-lg pl-4">{teamName}</div>
          </div>
          <div className="flex flex-row justify-start pt-3 items-center">
            <TriangleIcon className="w-5 h-5 mr-2 ml-4 text-blue-300" />
            <div className='text-sm text-gray-800 font-bold mr-2'>所属チームの変更</div>
            <HelpMordal><EditTeamHelp/></HelpMordal>
          </div>
          <div className="flex py-5 ml-8">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className='flex flex-row mb-2 items-center'>
                  <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
                  <p className="text-sm md:text-md font-bold text-gray-500 hidden md:block">新しいチームを作る？</p>
                  <p className="text-sm md:text-md text-gray-500 font-bold md:hidden">新しいチームを作成しますか？</p>
                </div>
                <div className="flex justify-center mb-3">
                  <CreateButton/>
                </div>
              </div>
              <div className="flex flex-col md:ml-6 ">
                <div className='flex flex-row mb-2 items-center'>
                  <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
                  <p className="text-sm md:text-md font-bold text-gray-500 hidden md:block">新しいチームに参加する？</p>
                  <p className="text-sm md:text-md text-gray-500 font-bold md:hidden">新しいチームに参加しますか？</p>
                </div>
                <div className="flex justify-center mb-3 md:ml-2">
                  <JoinButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
