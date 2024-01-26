import { TriangleIcon } from '@/app/components/ui/icon/Triangle';

type FormLabelProps = {
  children: string;
}

export function FormLabel({children}: FormLabelProps) {
  return (
    <div className="flex flex-row items-center">
      <TriangleIcon className="w-4 h-4 mr-2 mb-1 text-sky-800" />
      <div className='text-gray-800'>{children}</div>
    </div>
  )
}

export function FormLabelAsterisk({children}: FormLabelProps) {
  return (
    <div className="flex flex-row items-center">
      <TriangleIcon className="w-4 h-4 mr-2 mb-1 text-sky-800" />
      <div className='text-gray-800'>{children}</div>
      <div className='text-xs text-red-400 ml-1'>＊</div>
    </div>
  )
}