import { Metadata } from "next";
import Users from "@/app/components/page/Admin/Users"

export const metadata: Metadata = {
  title: 'ユーザー管理',
}

export default function page() {
  return <Users />
}
