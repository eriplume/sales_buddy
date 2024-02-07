import TeamSetting from "@/app/components/page/TeamSetting"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'team | setting',
  }

export default function page() {
  return <TeamSetting/>
}
