import { CloudIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-gray-600 body-font bg-white">
      <div className="container px-5 p-5 mx-auto flex flex-col sm:flex-row items-center">
        {/* アプリ名 + コピーライト*/}
        <div className="flex flex-row justify-center items-center">
          <a className="flex title-font font-medium items-center justify-center text-gray-900 text-xs mr-2">
            <span className="text-sm">sales buddy</span>
            <CloudIcon className="w-4 h-4 ml-1" />
          </a>
          <p className="text-xs text-gray-500 mb-0 md:pl-4 md:border-l border-gray-400">© 2023 의류 개인 판매 관리 —</p>
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