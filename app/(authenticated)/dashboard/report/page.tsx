import Report from "@/app/components/page/Report/Report"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'report archive',
}

export default function page() {
  return <Report />
}