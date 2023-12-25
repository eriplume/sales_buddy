import { JobRecord } from "@/types";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

type JobRecordProps = {
  records: JobRecord[];
};

export default function JobRecord({ records }: JobRecordProps) {

  return (
    <>
      <div className="p-4 border-t-4">
        {records.map((record, index) => (
          <div key={index} className="flex flex-row py-1 text-gray-700">
            <CheckBadgeIcon className="w-6 h-6 text-sky-800 mr-2" />
            <div>{record.job}</div>
          </div>
        ))}
      </div>
    </>
  )
}
