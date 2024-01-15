"use client"
import { useState } from 'react';
import useWeeklyStore from '@/store/weeklyStore';
import { Textarea } from '@mantine/core';

export default function ReportInputForm() {
  const [charCountError, setCharCountError] = useState('');
  const { content, setContent } = useWeeklyStore();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputContent = e.currentTarget.value;
    if (inputContent.length > 300) {
      setCharCountError('300文字以内で入力してください');
    } else {
      setCharCountError('');
    }
    setContent(inputContent);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form className='w-full'>
          <Textarea
            value={content}
            onChange={handleContentChange}
            placeholder="今週の振り返り"
            description="300字以内で入力してください"
            label="週間レポート"
            size="sm"
            error={charCountError} 
            withAsterisk
            autosize
            minRows={8}
            maxRows={14}
          />
        </form>
      </div>
    </>
  );
}