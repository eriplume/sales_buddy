"use client"
import Link from "next/link";
import Image from "next/image"
import { useRouter } from 'next/navigation'
import LineIcon from "@/public/btn_base.png";
import { TeamInfo } from "@/types";
import useUserStore from "@/store/userStore";
import { fetchUser } from "../../user/hooks/fetchUser";
import { UserGroupIcon, KeyIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import CopyActionButton from "@/app/components/ui/CopyActionButton";
import createCopyText from "@/utils/createCopyText";

type CopyProps = {
  TeamInfo: TeamInfo;
}

export default function CopyInfo({TeamInfo}: CopyProps) {
  const { setId, setTeamId, setTeamName, setNotifications} = useUserStore();
  const router = useRouter();

  const handleClick = () => {
    fetchUser({setId, setTeamId, setTeamName, setNotifications})
    router.push('/team/task')
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-start items-center border-t pt-4">
          <UserGroupIcon className="w-6 h-6 mr-2 text-sky-800" />
          <div className='text-gray-800 mr-1'>チーム名：</div>
          <div className='border py-2 px-3'>{TeamInfo.name}</div>
        </div>
        <div className="flex flex-row justify-start mt-3 mb-5 items-center border-b pb-4">
          <KeyIcon className="w-6 h-6 mr-2 text-sky-800" />
          <div className='text-gray-800 mr-1'>キーワード：</div>
          <div className='border py-2 px-3'>{TeamInfo.keyword}</div>
        </div>
        <div className="flex flex-row items-center mb-6 border-b pb-5">
          <div className='text-gray-800 mr-1'>招待用：</div>
          <div className="inline-flex text-gray-500 items-center bg-white border p-1 focus:outline-none rounded-lg text-sm items-center mr-2">
            <div className="flex flex-row justify-center items-center">
              <CopyActionButton value={createCopyText(TeamInfo)}/>
            </div>
          </div>
          <Link href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent('https://www.sbuddy-apparel.com')}`} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex text-white items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded-lg text-sm items-center">
              <div className="flex flex-row justify-center items-center">
                <Image className="object-cover object-center rounded" alt="mobilelogo" src={LineIcon} width={32} height={32}/>
                <div className="ml-1">招待する</div>
              </div>
            </button>
          </Link>
      </div>
      <button
        onClick={handleClick} 
        className="inline-flex text-gray-500 items-center bg-gray-100 border py-2 px-3 focus:outline-none rounded-lg text-sm items-center"
      >
        <div className="flex flex-row py-1 items-center">
          <div>チームタスクTOPへ</div>
          <CursorArrowRaysIcon className="w-6 h-6 ml-1 text-sky-700"/>
        </div>
      </button>
    </div>
  </>
  )
}
