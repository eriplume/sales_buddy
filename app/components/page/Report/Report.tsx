import { Breadcrumbs } from "../../ui/Breadcrumbs"
import ReportsIndex from "@/app/features/report/components/ReportsIndex"

export default function Report() {
  return (
    <>
      <Breadcrumbs>月別レポート一覧</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <ReportsIndex/>
      </div>
    </>
  )
}
