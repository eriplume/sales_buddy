import { Metadata } from "next";
import Dashboard from "@/app/components/page/Dashboard";

export const metadata: Metadata = {
  title: 'dashboard',
}

export default function page() {
  return <Dashboard/>
}
