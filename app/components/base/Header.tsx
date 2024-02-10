import Image from 'next/image';
import bgImage from "@/public/logo_bg.png";
import HeaderRight from './HeaderRight';

export default function Header() {
  return (
    <header className="md:sticky top-0 text-gray-600 body-font bg-white z-50 items-center md:pb-0">
      <div className="container mx-auto flex flex-wrap w-5/6 p-5 items-center justify-between relative">
        <div className="flex items-center">
          <div className="flex flex-row items-center">
            <div className='absolute top-1'>
              <Image className="object-cover" alt="bg" src={bgImage} width={63} height={63} priority/>
            </div>
            <div className="ml-4 text-xl lg:text-2xl font-bold absolute top-0 left-8 py-5">sales buddy</div>
          </div>
        </div>
        <div className='flex flex-row'>
          <HeaderRight />
        </div>
      </div>
    </header>
  )
}