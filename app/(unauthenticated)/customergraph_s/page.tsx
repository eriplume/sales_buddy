import { salesDatesDemo, customersRecordsDemo } from '@/app/components/page/Demo/DemoData';
import { BreadcrumbsDemo } from '@/app/components/ui/Breadcrumbs'
import { PencilIcon, UsersIcon } from '@heroicons/react/24/outline';
import DemoPie from '@/app/components/page/Demo/DemoPie';
import PieItemList from '@/app/components/page/CustomerGraph/PieItemList';

const pieColors = ['#0284c7','#3b82f6','#60a5fa', '#93c5fd','#bfdbfe', '#cbd5e1', '#94a3b8', '#075985', '#0369a1'];

export default function page() {
  const oldestDate = salesDatesDemo[0];
  const totalCustomers = Object.values(customersRecordsDemo).reduce((sum, count) => sum + count, 0);

  return (
    <>
      <BreadcrumbsDemo>customers graph</BreadcrumbsDemo>
      <div className="flex flex-col justify-center items-center mx-auto z-0 px-6 max-w-4xl mb-7 mt-4">
        <div className="flex flex-col sm:flex-row w-full max-w-lg bg-white rounded-t-md shadow-t-sm">
          <div className="flex flex-col md:flex-row text-sm text-gray-500 pl-5 mt-6">
            <div className="flex flex-row">
              <PencilIcon className="w-5 h-5 mx-2 text-gray-500 "/>
              集計開始日：{oldestDate} ~
            </div>
            <div className="flex flex-row md:ml-5 mt-1 md:mt-0">
              <UsersIcon className="w-5 h-5 mx-2 text-gray-500 "/>
              total：{totalCustomers}客
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-lg pb-2 bg-white rounded-b-md shadow-b-sm">
          <div className='md:w-3/4 md:pl-8 ml-6 mr-5 md:ml-0 md:mr-0'>
            <DemoPie colors={pieColors}/>
          </div>
          <div className='md:w-1/4 mx-auto  pl-2 mb-5'>
            <PieItemList colors={pieColors} />
          </div>
        </div>
      </div>
    </>
  )
}

