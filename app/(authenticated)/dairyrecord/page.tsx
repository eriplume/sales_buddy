import Caluculator from "@/app/components/page/DairyRecord/Caluculator";
import Submit from "@/app/components/page/DairyRecord/Submit";

export default function DairyRecordPage() {
    return (
      <>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto p-6 z-0 md:gap-x-6 max-w-5xl my-10">
        <Caluculator/>
        <Submit/>
      </div>
      </>
    )
}
