import DemoMonthlyArchive from "@/app/components/page/Demo/DemoMonthlyArchive"
import { BreadcrumbsDemo } from "@/app/components/ui/Breadcrumbs"

export default function page() {
  return (
    <>
      <BreadcrumbsDemo>月別実績データ</BreadcrumbsDemo>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <DemoMonthlyArchive />
      </div>
    </>
  )
}
