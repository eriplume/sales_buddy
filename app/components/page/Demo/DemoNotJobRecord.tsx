"use client"
import { useState } from 'react';
import { showErrorNotification } from '@/utils/notifications';
import { jobsListDemo } from './DemoData';
import { PencilIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import JobsInput from '../DashBoard/JobsInput';
import SubmitButton from '../../ui/button/SubmitButton';

type  NotJobRecordProps = {
    selectedDate: Date | null;
    close: () => void;
}

export default function DemoNotJobRecord({ selectedDate, close } :NotJobRecordProps) {
    const [ jobs, setJobs ] = useState<string[]>([]);
  
    const handleSubmit = async () => {
      if (selectedDate !== null && jobs.length !== 0 && jobs.length < 4 ) {
        showErrorNotification('登録にはログインが必要です');
      }
    };
  
    return (
      <>
        <div className="p-4 border-t-4">
          <div className='flex flex-col  w-full items-start'>
            <div className='flex w-full text-gray-700 font-bold items-center'>
              <PencilIcon className="w-5 h-5 text-sky-800 mr-2" />
              <div>業務を記録する</div>
            </div>
            <div className='text-xs text-gray-500'>20文字以内 / 最大3つまで登録できます</div>
            <div className="flex py-3">
              <JobsInput data={jobsListDemo} jobs={jobs} setJobs={setJobs}/>
            </div>
            <div className='flex flex-col px-2 mx-5'>
              {jobs.map((job, index) => 
                <div key={index} className='flex flex-row'>
                  <CheckCircleIcon className="w-4 h-4 text-blue-400 mr-1" />
                  <span className="text-sm font-medium">{job}</span>
                </div>
              )} 
            </div>
          </div>
          {jobs.length > 0 && 
            <div className="flex justify-end mr-3">
              <SubmitButton size="sm" onClick={handleSubmit}/>
            </div>
          }
        </div>
      </>
    )
  }
  