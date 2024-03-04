import { Metadata } from "next";
import WeeklyReports from "@/app/components/page/Admin/WeeklyReports";

export const metadata: Metadata = {
  title: '週間レポート管理',
}

export default function page() {
  return <WeeklyReports />
}
