import CalenderArea from "@/app/components/page/DashBoard/CalenderArea";
import ProgressArea from "@/app/components/page/DashBoard/ProgressArea";

export default function Dashboard() {  
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto p-6 z-0 md:gap-x-6 max-w-5xl my-10">
      <ProgressArea/>
      <CalenderArea/>
    </div>
    </>
  )
}
