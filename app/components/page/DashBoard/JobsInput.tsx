"use client"
import { useState } from 'react';
import { z } from 'zod';
import { showErrorNotification } from '@/utils/notifications';
import { Autocomplete, ActionIcon } from "@mantine/core";
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

type JobsInputProps = {
  data: string[];
  jobs: string[];
  setJobs: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function JobsInput({data, jobs, setJobs}: JobsInputProps) {
  const [ value, setValue] = useState('');
  
  const uniqueData = Array.from(new Set(data));
  const filteredData = uniqueData.filter(job => !jobs.includes(job));

  const schema = z.string().min(1, "業務を入力してください").max(20, "20文字以内で入力してください")
  .refine(content => content.trim().length > 0, "空白は無効です");
  
  const addData = () => {
    const validationResult = schema.safeParse(value);
    if (validationResult.success) {
      if (!jobs.includes(value)) {
        setJobs(prevJobs => [...prevJobs, value]);
        setValue('');
      }
    } else {
      const errorMessage = validationResult.error.issues[0].message;
      showErrorNotification(errorMessage, '入力内容を確認してください');
    }
  };

  const clearData = () => {
    setJobs([]);
  };

  return (
    <>
      <Autocomplete
        placeholder="店内レイアウト など"
        data={filteredData}
        value={value}
        onChange={setValue}
        disabled={jobs.length >= 3}
      />
      <div className='flex flex-row ml-2'>
        <div>
          <ActionIcon variant="outline" color="#93c5fd" disabled={jobs.length >= 3} size="lg" onClick={addData} className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform">
            <PlusIcon className='w-12 h-12 p-1' />
          </ActionIcon>
        </div>
        <div className='ml-2'>
          <ActionIcon variant="outline" color="#cbd5e1" size="lg" onClick={clearData} className="shadow-md hover:translate-y-1 hover:text-gray-500 transition-transform">
            <TrashIcon className='w-12 h-12 p-1' />
          </ActionIcon>
        </div>
      </div>
    </>
  )
}
