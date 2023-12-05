import { CloudIcon } from "@heroicons/react/24/outline";
export default function Footer() {

  return (
    <footer className="fixed bottom-0 left-0 right-0 text-gray-600 body-font bg-white">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4 sm:mb-0">
          <span className="mx-1 text-xl">sales buddy</span> 
          <CloudIcon className="w-6 h-6 font-bold" />
        </a>
        <div className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-center mt-2 sm:mt-0">
            <p className="mb-1 sm:mr-4">© 2023 의류 개인 판매 관리 —</p>
            <div className="flex justify-center sm:justify-start items-center">
              <a href="" className="text-gray-900 sm:ml-1" rel="noopener noreferrer" target="_blank">terms of service</a>
              <span className="mx-1">/</span>
              <a href="" className="text-gray-900 sm:ml-1" rel="noopener noreferrer" target="_blank">privacy policy</a>
              <span className="mx-1">/</span>
              <a href="" className="text-gray-900 sm:ml-1" rel="noopener noreferrer" target="_blank">contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}