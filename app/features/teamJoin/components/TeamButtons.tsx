"use client"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import CreateButton from "@/app/features/teamJoin/components/CreateButton";
import JoinButton from "@/app/features/teamJoin/components/JoinButton";
import { useSessionUserHooks } from "../../demoPage/hooks/useSessionUser";

export default function TeamButtons() {
  const { session } = useSessionUserHooks();
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <div className='flex flex-row mb-2 items-center'>
          <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
          <p className="text-sm md:text-md font-bold text-gray-500 hidden md:block">チームを作る</p>
          <p className="text-sm md:text-md text-gray-500 font-bold md:hidden">チームを作成して始める</p>
        </div>
        <div className="flex justify-center mb-3">
          { session 
            ?  <CreateButton/>
            :  <div className='text-gray-300 text-sm bg-gray-100 border-0 p-3 rounded-lg'>ログインが必要です</div>
          }
        </div>
      </div>
      <div className="flex flex-col md:ml-4 ">
        <div className='flex flex-row mb-2 items-center'>
          <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
          <p className="text-sm md:text-md text-gray-500 font-bold">招待されていますか？</p>
        </div>
        <div className="flex justify-center mb-3 md:ml-2">
          { session 
            ?  <JoinButton/>
            :  <div className='text-gray-300 text-sm bg-gray-100 border-0 p-3 rounded-lg'>ログインが必要です</div>
          }
        </div>
      </div>
    </div>
  )
}
