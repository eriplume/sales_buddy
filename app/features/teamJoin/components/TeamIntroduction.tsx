import Image from "next/image"
import teamImage from "@/public/teams.png";
import { ChatBubbleLeftRightIcon, ClockIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import TeamButtons from "./TeamButtons";

export default function TeamIntroduction() {
  return (
    <>
      <div className="container mx-auto flex px-5 pt-7 pb-3 md:flex-row flex-col items-center bg-white">
        <div className="md:w-1/2 mb-5 md:mb-0 md:p-5 ">
          <Image className="object-cover object-center rounded" alt="mobilelogo" src={teamImage} width={500} height={500} priority/>
        </div>
        <div className="mx-3 lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-2xl md:text-3xl text-gray-500 mt-1 mb-2 font-bold">チーム機能を始めよう</h1>
          <p className="text-sm md:text-md mt-2">あなたの『やりたいこと』『優先順位』</p>
          <p className="text-sm md:text-md mb-1">埋もれてしまっていませんか？</p>
          <div className='flex flex-row items-center mt-2'>
            <p className="text-md text-gray-600 border-b-4 border-blue-50 font-bold">チームでタスクを管理</p>
            <p className="text-sm md:text-md ml-1">して</p>
          </div>
          <div className='flex flex-row items-center mb-3'>
            <p className="text-sm md:text-md">スケジューリングを効率化しよう</p>
            <ClockIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
          </div>
          <div className='flex flex-row items-center'>
            <p className="text-md text-gray-600 border-b-4 border-blue-50 font-bold">コメント, 通知機能</p>
            <p className="text-sm md:text-md ml-1">を併用して</p>
          </div>
          <div className='flex flex-row items-center mb-5'>
            <p className="text-sm md:text-md">チーム業務を漏れなくこなそう</p>
            <FaceSmileIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
            <ChatBubbleLeftRightIcon className='h-5 w-5 text-md text-gray-500'/>
          </div>
          <TeamButtons/>
        </div>
      </div>
    </>
  )
}
