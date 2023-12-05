import { Bars3Icon, CloudIcon } from "@heroicons/react/24/outline";
import { LoginButton } from "../LoginButton";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="flex items-center">
        <Bars3Icon className="w-6 h-6 md:hidden mr-2" /> {/* モバイルビューでのみアイコン表示 */}
          <div className="flex items-center">
            <span className="mx-1 text-xl font-bold">sales buddy</span>
            <CloudIcon className="w-6 h-6 font-bold" />
          </div>
        </div>
        <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Dairy Record</a>
          <a className="mr-5 hover:text-gray-900">Report</a>
          <a className="mr-5 hover:text-gray-900">Summary creation</a>
          <a className="mr-5 hover:text-gray-900">Teams</a>
        </nav>
        <LoginButton/>
      </div>
    </header>
  );
}