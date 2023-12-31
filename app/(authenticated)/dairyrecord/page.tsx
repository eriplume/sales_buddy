import Caluculator from "@/app/components/page/DairyRecord/Caluculator";
import Submit from "@/app/components/page/DairyRecord/Submit";
import HelpMordal from "@/app/components/ui/HelpMordal";

export default function DairyRecordPage() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto px-6 z-0 md:gap-x-6 max-w-4xl my-10 xl:my-20">
          <Caluculator/>
          <Submit/>
        </div>
      </>
    )
}
