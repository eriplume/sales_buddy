import Breadcrumbs from '@/app/components/ui/Breadcrumbs'
import PieItemList from '@/app/components/page/CustomerGraph/PieItemList'
import CustomersPie from '@/app/components/page/CustomerGraph/CustomersPie';

const pieColors = ['#60a5fa', '#93c5fd','#bfdbfe', '#cbd5e1', '#94a3b8', '#075985', '#0369a1', '#0284c7','#3b82f6' ];

export default function page() {
  return (
    <>
      <Breadcrumbs>customers graph</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto z-0 px-6 max-w-4xl mb-7 mt-4">
        <div className="flex flex-col sm:flex-row w-full max-w-lg pb-2 bg-white rounded-md shadow-sm">
          <div className='md:w-3/4 md:pl-8 mx-auto'>
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
