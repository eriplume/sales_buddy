import Image from 'next/image';
import bgImage from "@/public/logo_bg.png";
import UserStatus from "./UserStatus";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className="md:sticky top-0 text-gray-600 body-font bg-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between md:max-w-2xl lg:max-w-4xl relative">
        <div className="flex items-center">
          <span className="hidden md:block"><DrawerMenu/></span>
          <div className="flex flex-row items-center">
            <div className='absolute top-0 left-8 lg:ml-8'>
              <Image className="object-cover rounded" alt="bg" src={bgImage} width={65} height={65} priority/>
            </div>
            <div className="ml-4 lg:ml-12 text-xl lg:text-2xl font-bold absolute top-0 left-12 py-5">sales buddy</div>
          </div>
        </div>
          <UserStatus />
      </div>
    </header>
  )
}