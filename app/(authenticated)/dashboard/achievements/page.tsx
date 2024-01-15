import { Metadata } from "next"
import Achievements from "@/app/components/page/Archive/Achievements"

export const metadata: Metadata = {
  title: 'achievements',
}

export default function page() {
  return <Achievements />
}
