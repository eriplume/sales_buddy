"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { Carousel } from '@mantine/carousel';
import noteImage from "@/public/note.png";
import welcomeImage from "@/public/mobile_logo.png";
import ladyImage from "@/public/lady.png";
import startImage from "@/public/login_tap.png";
import LoginButton from '../../LoginButton';
import { ChatBubbleLeftEllipsisIcon, ChevronDoubleDownIcon, FaceSmileIcon, HandThumbUpIcon, LightBulbIcon, PencilIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Introduction() {
  const router = useRouter()

  return (
    <>
      <section className="text-gray-600 body-font max-w-xs md:max-w-2xl lg:max-w-4xl bg-white rounded-sm shadow-md">
        <Carousel withIndicators controlsOffset="xs" className='flex w-full pb-3'>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 pt-7 pb-3 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 md:mb-0">
                <Image className="object-cover object-center rounded" alt="mobilelogo" src={welcomeImage} width={600} height={600} priority/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
                <h1 className="title-font text-4xl lg:text-5xl font-medium text-gray-500 mt-3 md:mt-4 mb-1 md:mb-2 font-bold">Welcome !</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">sales buddy へようこそ</p>
                <p className="text-md">このアプリは</p>
                <p className="text-md my-1 font-bold">“ アパレル販売員のための ”</p>
                <p className="text-md mb-8">自己記録管理アプリです。</p>
                <div className='flex flex-row mb-2 items-center'>
                  <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
                  <p className="text-sm md:text-md">ログインしてはじめる</p>
                </div>
                <div className="flex justify-center mb-4">
                  <LoginButton/>
                  <button
                    onClick={() => router.push('/dashboard_s')}
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
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 pt-7 pb-5 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 md:p-5 ">
                <Image className="object-cover object-center rounded" alt="lady" src={ladyImage} width={600} height={600}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
                <h1 className="title-font text-3xl md:text-4xl font-medium text-gray-500 mb-3 mt-1 lg:mb-7 font-bold">何ができるの？</h1>
                <p className="text-md md:text-lg border-b font-bold mt-2 mb-1">日々の個人売上を管理します</p>
                <div className='flex flex-row items-center mb-5'>
                  <p className="text-sm md:text-md">セット率や客単価もお任せあれ</p>
                  <HandThumbUpIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-md md:text-lg border-b font-bold mb-1">週ごとに目標達成をサポート</p>
                <p className="text-sm md:text-md">あとどのくらい売ればいいの？</p>
                <div className='flex flex-row items-center mb-5'>
                  <p className="text-sm md:text-md">が具体的にわかる</p>
                  <LightBulbIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-md md:text-lg border-b font-bold mb-1">振り返りをしやすく</p>
                <div className='flex flex-row items-center'>
                  <p className="text-sm md:text-md">週末に振り返りをしよう</p>
                  <PencilIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-sm md:text-md mb-4">月のまとめはAIが自動作成します。</p>
              </div>
            </div>
            <div className='flex flex-row justify-end pr-3 pb-2'>
              <p className="text-xs">NEXT　→</p>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 pt-7 pb-5 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 md:p-5">
                <Image className="object-cover object-center rounded" alt="note" src={noteImage} width={600} height={600}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
              <h1 className="title-font text-3xl md:text-4xl font-medium text-gray-500 mb-4 mt-1 lg:mb-7 font-bold">知るきっかけに</h1>
                <p className="text-sm md:text-md mb-2">どの客層が得意なんだろう？</p>
                <p className="text-sm md:text-md mb-2">どうやって目標に取り組んだんだっけ？</p>
                <p className="text-sm md:text-md mb-3">何の業務に時間使ったっけ？</p>
                <div className='flex flex-row items-center mb-5'>
                  <p className="text-sm md:text-md">etc</p>
                  <ChatBubbleLeftEllipsisIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-sm md:text-md">目標の立てっぱなし、</p>
                <p className="text-sm md:text-md mb-1">やりっぱなしにしないこと。</p>
                <p className="text-sm md:text-md mb-2">具体的なデータを残すことで</p>
                <div className='flex flex-row items-center mb-5'>
                  <p className="text-sm md:text-md lg:text-lg font-bold">自分を知るきっかけにもなるはず</p>
                  <SparklesIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-end pr-3 pb-2'>
              <p className="text-xs">NEXT　→</p>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
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
                  <LoginButton/>
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
          </Carousel.Slide>
        </Carousel>
      </section>
    </>
  )
}
