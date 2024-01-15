import { Breadcrumbs } from "../../ui/Breadcrumbs"
import MonthlyArchive from "./MonthlyArchive"

export default function Achievements() {
  return (
    <>
      <Breadcrumbs>月別実績データ</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <MonthlyArchive />
      </div>
  </>
  )
}
