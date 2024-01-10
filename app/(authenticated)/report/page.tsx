import ReportArchive from "@/app/components/page/Report/ReportArchive"
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs"

export default function page() {
  return (
    <>
      <Breadcrumbs>report</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <ReportArchive/>
      </div>
    </>
  )
}