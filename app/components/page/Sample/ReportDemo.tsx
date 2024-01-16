import { BreadcrumbsDemo } from "../../ui/Breadcrumbs"
import DemoReportArchive from "@/app/features/demoPage/components/DemoReportArchive"

export default function ReportDemo() {
  return (
    <>
      <BreadcrumbsDemo>月別レポート一覧</BreadcrumbsDemo>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <DemoReportArchive />
      </div>
    </>
  )
}
