import Calender from "./Calendar"

export default function CalenderArea() {
  return (
    <div className="bg-white p-7 shadow-md flex flex-col">
      <div className="flex flex-row justify-end items-center w-full text-gray-400 px-2 mb-2">
        <span className="text-xs text-blue-300 mr-1">⚫︎</span>
        <span className="text-xs">売上記録した日</span>
      </div>
      <Calender/>
    </div>
  )
}
