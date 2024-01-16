import DemoCalenderArea from "../Demo/DemoCalenderArea"
import DemoProgressArea from "../Demo/DemoProgressArea"

export default function DashboardDemo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-5xl mb-10 md:mt-10 xl:my-18">
      <DemoProgressArea />
      <DemoCalenderArea />
    </div>
  )
}
