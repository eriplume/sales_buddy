import { BreadcrumbsDemo } from "../../ui/Breadcrumbs"
import DemoAchievements from "@/app/features/demoPage/components/DemoAchievements"

export default function AchievementsDemo() {
  return (
    <>
      <BreadcrumbsDemo>月別実績データ</BreadcrumbsDemo>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <DemoAchievements />
      </div>
    </>
  )
}
