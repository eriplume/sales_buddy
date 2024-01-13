import DemoCalenderArea from "@/app/components/page/Demo/DemoCalenderArea";
import DemoProgressArea from "@/app/components/page/Demo/DemoProgressArea";
import { BreadcrumbsRoot } from "@/app/components/ui/Breadcrumbs";

export default function page() {  
  return (
    <>
      <div className="flex flex-col  md:max-w-2xl ml-5 md:mx-auto">
        <BreadcrumbsRoot>dashboardサンプル</BreadcrumbsRoot>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-5xl mb-10 md:mt-10 xl:my-18">
        <DemoProgressArea />
        <DemoCalenderArea />
      </div>
    </>
  )
}