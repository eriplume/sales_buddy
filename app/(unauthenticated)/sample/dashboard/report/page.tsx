import DemoReportArchive from '@/app/components/page/Demo/DemoReportArchive'
import { BreadcrumbsDemo } from '@/app/components/ui/Breadcrumbs'

export default function page() {
  return (
    <>
      <BreadcrumbsDemo>月別レポート一覧</BreadcrumbsDemo>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <DemoReportArchive />
      </div>
    </>
  )
}
