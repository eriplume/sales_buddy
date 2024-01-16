import { Metadata } from "next";
import DairyRecord from "@/app/components/page/DairyRecord";

export const metadata: Metadata = {
  title: 'dairy record',
}

export default function page() {
  return <DairyRecord/>
}
