import Image from "next/image"
import ladyImage from "@/public/lady.png";
import { HandThumbUpIcon, LightBulbIcon, PencilIcon } from "@heroicons/react/24/outline"

export default function WhatDo() {
  return (
    <>
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
    </>
  )
}
