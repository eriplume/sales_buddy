"use client"
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import noteImage from "@/public/note.png";
import iphoneImage from "@/public/iphone_logo.png";
import ladyImage from "@/public/lady.png";
import LoginButton from '../../LoginButton';
import { ChevronDoubleDownIcon, HandThumbUpIcon, LightBulbIcon, PencilIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Introduction() {
  return (
    <>
      <section className="text-gray-600 body-font max-w-xs md:max-w-2xl lg:max-w-4xl bg-white rounded-sm shadow-md">
        <Carousel withIndicators controlsOffset="xs" loop className='flex w-full pb-3'>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image className="object-cover object-center rounded" alt="hero" src={iphoneImage} width={600} height={600} priority/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
                <h1 className="title-font text-4xl font-medium text-gray-500 my-4 font-bold">Welcome !</h1>
                <p className="text-md text-xl font-bold mb-3">sales buddy へようこそ。</p>
                <p className="text-md">このアプリは</p>
                <p className="text-md my-1 font-bold border-b-2 ">『 アパレル販売員のための 』</p>
                <p className="text-md mb-8">自己記録管理アプリです。</p>
                <div className='flex flex-row mb-2 items-center'>
                  <ChevronDoubleDownIcon className='h-5 w-5 text-md text-gray-500 mr-1'/>
                  <p className="text-md">ログインして早速始める</p>
                </div>
                <div className="flex justify-center">
                  <LoginButton/>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-md items-center">お試し</button>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 pt-7 pb-5 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 md:p-5 ">
                <Image className="object-cover object-center rounded" alt="hero" src={ladyImage} width={600} height={600}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
                <h1 className="title-font text-3xl font-medium text-gray-500 mb-4 font-bold">何ができるの？</h1>
                <p className="text-md border-b font-bold mt-2">日々の個人売上を管理します</p>
                <div className='flex flex-row items-center'>
                  <p className="text-md">セット率や客単価もお任せあれ</p>
                  <HandThumbUpIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-md mt-4 border-b font-bold">週ごとに目標達成をサポート</p>
                <p className="text-md">後どのくらい売ればいいの？</p>
                <div className='flex flex-row items-center'>
                  <p className="text-md">が具体的にわかる</p>
                  <LightBulbIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-md mt-4 border-b font-bold">振り返りをしやすく</p>
                <div className='flex flex-row items-center'>
                  <p className="text-md">週末に振り返りをしよう</p>
                  <PencilIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
                <p className="text-md">月のまとめはAIが自動作成します。</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="container mx-auto flex px-5 pt-7 pb-5 md:flex-row flex-col items-center bg-white">
              <div className="md:w-1/2 w-5/6 mb-10 md:mb-0 md:p-5">
                <Image className="object-cover object-center rounded" alt="hero" src={noteImage} width={600} height={600}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center bg-white">
              <h1 className="title-font text-3xl font-medium text-gray-500 mb-4 font-bold">知るきっかけに</h1>
                <p className="text-md mt-2">どの客層が得意なんだろう？</p>
                <p className="text-md mt-4">立てた目標に対して</p>
                <p className="text-md">どうやって取り組んだんだろう？</p>
                <p className="text-md mt-4 mb-7">何の業務に時間使ったっけ？</p>
                <p className="text-md">目標の立てっぱなし、</p>
                <p className="text-md">やりっぱなしにしないことで</p>
                <div className='flex flex-row items-center'>
                  <p className="text-md font-bold">自分を知るきっかけにもなるはず</p>
                  <SparklesIcon className='h-5 w-5 text-md text-gray-500 ml-1'/>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </section>
    </>
  )
}
