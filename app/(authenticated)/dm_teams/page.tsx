import Teams from "@/app/components/page/Teams"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'team page',
}

export default function page() {
  return <Teams/>
}
