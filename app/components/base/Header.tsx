import { CloudIcon } from "@heroicons/react/24/outline";
import UserStatus from "./UserStatus";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className="sticky top-0 text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="flex items-center">
        <span className="md:hidden"><DrawerMenu/></span>
          <div className="flex items-center">
            <span className="mx-1 text-xl font-bold">sales buddy</span>
            <CloudIcon className="w-6 h-6 font-bold" />
          </div>
        </div>
        <UserStatus />
      </div>
    </header>
  )
}