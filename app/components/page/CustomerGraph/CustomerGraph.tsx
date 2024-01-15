import { Breadcrumbs } from "../../ui/Breadcrumbs"
import RecordedDate from "./RecordedDate"
import CustomersPie from "./CustomersPie"
import PieItemList from "./PieItemList"

export default function CustomerGraph() {

  const pieColors = ['#0284c7','#3b82f6','#60a5fa', '#93c5fd','#bfdbfe', '#cbd5e1', '#94a3b8', '#075985', '#0369a1'];
  
  return (
    <>
      <Breadcrumbs>客層タイプグラフ</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto z-0 px-6 max-w-4xl mb-7 mt-4">

      <div className="flex flex-col sm:flex-row w-full max-w-lg bg-white rounded-t-md shadow-t-sm">
        <RecordedDate />
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-lg pb-2 bg-white rounded-b-md shadow-b-sm">
        <div className='md:w-3/4 md:pl-8 ml-6 mr-5 md:ml-0 md:mr-0'>
          <CustomersPie colors={pieColors}/>
        </div>
        <div className='md:w-1/4 mx-auto  pl-2 mb-5'>
          <PieItemList colors={pieColors} />
        </div>
      </div>
    </div>
  </>
  )
}
