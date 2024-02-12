import { Metadata } from "next";
import DairyRecords from "@/app/components/page/Admin/DairyRecords";

export const metadata: Metadata = {
  title: '売上レコード管理',
}

export default function page() {
  return <DairyRecords/>
}
