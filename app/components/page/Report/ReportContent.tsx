import React from 'react'
import CopyActionButton from '../../ui/CopyActionButton';

type ReportContentProps = {
  content: string;
  }

export default function ReportContent({content} : ReportContentProps) {
  return (
    <>
      <div className='flex justify-end pr-2 pb-2'>
        <CopyActionButton value={content}/>
      </div>
      <div className="p-4 bg-white rounded-sm">
        <div className='text-sm md:text-md'>{content}</div>
      </div>
    </>
  )
}