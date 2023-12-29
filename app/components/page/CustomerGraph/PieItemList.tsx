"use client"
import useCalculationStore from "@/store/calculationStore";
import SquareIcon from "../../ui/icon/SquareIcon";

type PieProps = {
  colors: string[]
}

export default function PieItemList({colors}: PieProps ) {
  const { options } = useCalculationStore();
  const name = options.map(option => option.label);
  
  return (
    <div className="flex flex-row md:flex-col items-center sm:pt-9 md:grid">
      {name.length > 0 ? (
        <div className="grid grid-cols-3 sm:block">
          {name.map((label, index) => (
            <div key={index} className="flex flex-row text-md text-gray-700 items-center">
              <SquareIcon className="w-4 h-4 mr-2" fill={colors[index % colors.length]} />
              {label}
            </div>
          ))}
        </div>
      ) : (
        null
      )}
    </div>
  )
}
