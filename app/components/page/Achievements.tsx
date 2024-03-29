import { Breadcrumbs } from "../ui/Breadcrumbs"
import AchievementsIndex from "@/app/features/achievements/components/AchievementsIndex"

export default function Achievements() {
  return (
    <div className="my-4 xl:my-10">
      <Breadcrumbs>月別実績データ</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <AchievementsIndex/>
      </div>
    </div>
  )
}
