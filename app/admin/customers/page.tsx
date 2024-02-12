import { Metadata } from "next";
import Customers from "@/app/components/page/Admin/Customers";

export const metadata: Metadata = {
  title: '客層管理',
}

export default function page() {
  return <Customers/>
}