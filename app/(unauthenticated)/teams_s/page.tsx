import { WrenchIcon } from "@heroicons/react/24/outline"

export default function page() {
  return (
    <div className="flex flex-col h-screen md:h-80">
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mt-4">
        <div className='flex flex-row items-center mt-8'>
          <div>本リリースで実装予定</div>
          <WrenchIcon className="w-5 h-5 ml-1"/>
        </div>
      </div>
    </div>
  )
}