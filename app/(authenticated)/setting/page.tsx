import { Metadata } from "next"
import Setting from "@/app/components/page/Setting"

export const metadata: Metadata = {
  title: 'setting',
}

export default function page() {
  return <Setting />
}
