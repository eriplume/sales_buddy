import OrganizeTeam from "@/app/components/page/OrganizeTeam"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'organize team',
}

export default function page() {
  return <OrganizeTeam />
}
