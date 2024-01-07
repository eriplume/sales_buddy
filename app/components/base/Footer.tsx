import Image from 'next/image';
import logoImage from "@/public/logo.png";
import HangerIcon from '../ui/icon/HangerIcon';

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-50 md:bg-white">
      <div className="container px-5 p-5 mx-auto flex flex-col sm:flex-row items-center">
        {/* アプリ名 + コピーライト*/}
        <div className="flex flex-row justify-center items-center">
          <a className="flex title-font font-medium items-center justify-center text-gray-900 text-xs mr-2">
            <Image alt="logo" src={logoImage} width={40}height={40} priority/>
            <div className="flex flex-row items-center">
              <div className="text-sm ml-1">sales buddy</div>
              <HangerIcon className='h-5 w-5 text-gray-800 ml-1'/>
            </div>
          </a>
          <p className="text-xs text-gray-500 mb-0 md:pl-4 md:border-l border-gray-400">© 2023 sales buddy —</p>
        </div>

        {/* 2行目: リンク */}
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <a href="" className="text-gray-900 text-xs sm:ml-1" rel="noopener noreferrer" target="_blank">terms of service</a>
          <span className="mx-1">/</span>
          <a href="" className="text-gray-900 text-xs sm:ml-1" rel="noopener noreferrer" target="_blank">privacy policy</a>
          <span className="mx-1">/</span>
          <a href="" className="text-gray-900 text-xs sm:ml-1" rel="noopener noreferrer" target="_blank">contact</a>
        </div>
      </div>
    </footer>
  )
}