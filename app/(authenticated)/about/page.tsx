import { Metadata } from "next";
import About from "@/app/components/page/About/About";

export const metadata: Metadata = {
  title: 'about',
}

export default function page() {
  return <About />
}
