"use client"
import Image from "next/image"
import welcomeImage from "@/public/mobile_logo.png";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import LoginButton from "../../../components/ui/LoginButton";
import { useSessionUserHooks } from "../../demoPage/hooks/useSessionUser";

export default function Welcome() {
  const { router, session } = useSessionUserHooks();
  
  return (
    <>
      <div className="container mx-auto flex px-5 pt-7 pb-3 md:flex-row flex-col items-center bg-white">
        <div className="md:w-1/2 md:mb-0">
          <Image className="object-cover object-center rounded" alt="mobilelogo" src={welcomeImage} width={600} height={600} priority/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
          <h1 className="title-font text-4xl lg:text-5xl font-medium text-gray-500 mt-3 md:mt-4 mb-1 md:mb-2 font-bold">Welcome !</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">sales buddy へようこそ</p>
          <p className="text-md lg:text-lg">このアプリは</p>
          <p className="text-md lg:text-lg my-1 font-bold">“ アパレル販売員のための ”</p>
          <p className="text-md lg:text-lg mb-8">自己記録管理アプリです。</p>
          <div className='flex flex-row mb-2 items-center'>
            <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
            <p className="text-sm md:text-md lg:text-lg font-bold">ログインしてはじめる</p>
          </div>
          <div className="flex justify-center mb-4">
            { session 
              ? <div className='text-gray-300 bg-gray-100 border-0 py-2 px-7 rounded-lg'>ログイン済</div>
              :  <LoginButton/>
            }
            <button
              onClick={() => router.push('/sample/dashboard')}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-md items-center"
            >
              お試し
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-end pr-3 pb-2'>
        <p className="text-xs">このアプリでできること　→</p>
      </div>
    </>
  )
}
