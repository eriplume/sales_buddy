import useCalculationStore from '@/store/calculationStore';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import UsersAvatar from './UsersAvatar';

export default function CustomersList() {
  const { customerLabels } = useCalculationStore();

  return (
    <div className="flex flex-row justify-center items-center w-full h-20 px-6">
      {customerLabels.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {customerLabels.split('、').map((label, index) => (
            <div key={index} className="flex items-center justify-center">
              <CheckCircleIcon className="w-4 h-4 text-blue-400 mr-1" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      ) : (
        <>
          <UsersAvatar/>
          <span className='ml-2'>: 選択されていません</span>
        </>
      )}
    </div>
  )
}
