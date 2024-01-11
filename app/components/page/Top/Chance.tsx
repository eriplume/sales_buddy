import Image from "next/image"
import noteImage from "@/public/note.png";
import { ChatBubbleLeftEllipsisIcon, SparklesIcon } from "@heroicons/react/24/outline"

export default function Chance() {
  return (
    <>
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
    </>
  )
}
