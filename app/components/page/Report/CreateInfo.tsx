import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Button } from '@mantine/core';

export default function CreateInfo() {
  return (
    <>
      <div className="flex flex-row justify-center items-center px-7 md:px-12">
        <Button variant="filled" color="#60a5fa">
          Create
          <PaperAirplaneIcon className='w-5 h-5 ml-2'/>
        </Button>
      </div>
    </>
  )
}
