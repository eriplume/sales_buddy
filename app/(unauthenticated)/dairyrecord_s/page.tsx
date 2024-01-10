import DemoCaluculator from '@/app/components/page/Demo/DemoCaluculator'
import DemoSubmitArea from '@/app/components/page/Demo/DemoSubmitArea'

export default function page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-4xl my-10 xl:my-20">
      <DemoCaluculator />
      <DemoSubmitArea />
    </div>
  )
}
