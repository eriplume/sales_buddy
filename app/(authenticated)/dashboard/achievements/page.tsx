import { Metadata } from "next"
import Achievements from "@/app/components/page/Achievements/Achievements"

export const metadata: Metadata = {
  title: 'achievements',
}

export default function page() {
  return <Achievements />
}
