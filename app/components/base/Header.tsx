import UserStatus from "./UserStatus";
import DrawerMenu from "./DrawerMenu";
import HangerIcon from '../ui/icon/hangerIcon';

export default function Header() {
  return (
    <header className="md:sticky top-0 text-gray-600 body-font bg-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between md:max-w-2xl lg:max-w-4xl">
        <div className="flex items-center">
          <span className="hidden md:block"><DrawerMenu/></span>
          <div className="flex flex-row items-center">
            <div className="ml-4 lg:ml-8 text-xl lg:text-2xl font-bold">sales buddy</div>
            <HangerIcon className='h-7 w-7 text-gray-400 ml-1'/>
          </div>
        </div>
          <UserStatus />
      </div>
    </header>
  )
}