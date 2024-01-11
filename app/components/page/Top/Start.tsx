"use client"
import { useSession } from "next-auth/react";
import Image from 'next/image';
import startImage from "@/public/login_tap.png";
import { useRouter } from 'next/navigation'
import { ChevronDoubleDownIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import LoginButton from '../../ui/LoginButton';

export default function Start() {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <>
      <div className="container mx-auto flex px-5 pb-3 pt-3 md:pt-5 md:flex-row flex-col items-center bg-white">
        <div className="md:w-1/2 w-5/6 mb-5 md:mb-0 md:p-2 md:ml-2">
          <Image className="object-cover object-center rounded" alt="start" src={startImage} width={600} height={600} priority/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
          <h1 className="title-font text-3xl md:text-4xl font-medium text-gray-500 mt-4 lg:pt-6 mb-4 lg:mb-8 font-bold">さあ始めよう !</h1>
          <p className="text-sm md:text-md mb-1 lg:mb-3">メールアドレス等の登録は不要。</p>
          <p className="text-sm md:text-md mb-4 lg:mb-6">LINEでログインして簡単スタート！</p>
          <div className='flex flex-row items-center mb-5 lg:mb-9'>
            <p className="text-sm md:text-md">まずは目標設定から始めよう</p>
            <FaceSmileIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
          </div>
          <div className='flex flex-row mb-2 items-center'>
            <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
            <p className="text-sm md:text-md lg:text-lg font-bold">ログインしてはじめる</p>
          </div>
          <div className="flex justify-center mb-6 md:ml-5">
            { session 
              ? <div className='text-gray-300 bg-gray-100 border-0 py-2 px-4 rounded-lg'>ログイン済みです</div>
              :  <LoginButton/>
            }
          </div>
          <div className='flex flex-row mb-2 items-center'>
            <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
            <p className="text-sm md:text-md lg:text-lg font-bold">アプリを覗いてみる？</p>
          </div>
          <div className="flex justify-center mb-3 md:ml-5">
            <button 
              onClick={() => router.push('/dashboard_s')}
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-7 focus:outline-none hover:bg-gray-200 rounded-lg text-sm items-center"
            >
              お試しページへ
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-start pl-4 pb-2'>
        <p className="text-xs">←　BACK</p>
      </div>
    </>
  )
}
