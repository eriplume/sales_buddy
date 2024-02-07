import TeamTasks from "@/app/components/page/TeamTasks"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'team page',
}

export default function page() {
  return <TeamTasks />
}
