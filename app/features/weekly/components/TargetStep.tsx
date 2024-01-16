import useDashboardStore from '@/store/dashboardStore';
import TargetInputForm from './TargetInputForm'
import TargetRangeInput from './TargetRangeInput';
import { FireIcon } from '@heroicons/react/24/outline';

export default function TargetStep() {
  const { registeredTargetRanges } = useDashboardStore();

  return (
    <div className="flex flex-col w-full mx-auto max-w-lg bg-white px-10 pb-10 pt-6 shadow-sm rounded">
      <div className="flex flex-row justify-center items-center w-full border-b pb-2 mb-2 md:hidden">
        <FireIcon className="w-6 h-6 text-gray-500 mr-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <span className="mx-1 text-sm text-gray-700">次週の目標を入力</span>
      </div>
      <div className="flex space-y-4 w-full p-2 mx-auto">
        <TargetRangeInput/>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="flex w-full p-2 mx-aut justify-center">
          <div className="w-60 md:w-full overflow-auto">
            <TargetInputForm registeredTargetRanges={registeredTargetRanges}/>
          </div>
        </div>
      </div>
    </div>
  )
}
