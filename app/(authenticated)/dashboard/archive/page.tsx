import MonthlyArchive from "@/app/components/page/Archive/MonthlyArchive"
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs"

export default function Archive() {

  return (
    <>
      <Breadcrumbs>月別実績データ</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <MonthlyArchive />
      </div>
    </>
  )
}
