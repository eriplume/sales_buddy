"use client"
import { useState, useEffect } from 'react';
import { ResisteredDateRange } from '@/types';
import useWeeklyStore from '@/store/weeklyStore';
import { Textarea } from '@mantine/core';
import { isDateInRanges } from '@/utils/dateUtils';

type ReportInputFormProps = {
  registeredReportRanges: ResisteredDateRange[];
};

export default function ReportInputForm({registeredReportRanges}: ReportInputFormProps) {
  const { content, setContent } = useWeeklyStore();
  const { contentDateRange } = useWeeklyStore();
  const [isFormDisabled, setFormDisabled] = useState(
    isDateInRanges(contentDateRange[0], registeredReportRanges)
  );
  const [charCountError, setCharCountError] = useState('');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputContent = e.currentTarget.value;
    if (inputContent.length > 300) {
      setCharCountError('300文字以内で入力してください');
    } else {
      setCharCountError('');
    }
    setContent(inputContent);
  };

  useEffect(() => {
    setFormDisabled(isDateInRanges(contentDateRange[0], registeredReportRanges));
  }, [contentDateRange, registeredReportRanges]);

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
            disabled={isFormDisabled}
          />
        </form>
      </div>
    </>
  );
}