import { Button } from '@mantine/core';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function CreateInfo() {
  return (
    <>
      <div className="flex flex-row justify-center items-center px-7 md:px-12">
        <Button variant="outline" color="#9ca3af" className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform" >
          Create
          <PaperAirplaneIcon className="w-5 h-5 ml-1 text-blue-400" />
        </Button>
      </div>
    </>
  )
}
