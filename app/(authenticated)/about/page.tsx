import { Metadata } from "next";
import Introduction from "../../components/page/Top/Introduction";

export const metadata: Metadata = {
  title: 'about',
}

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <Introduction/>
      </div>
    </>
  )
}