"use client"
import axios from 'axios'
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import useDashboardStore from '@/store/dashboardStore';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { Textarea, Tooltip } from '@mantine/core';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import CancelActionIcon from '../../../components/ui/CancelActionIcon';

type ReportContentProps = {
  content: string;
  id: number;
  edit: boolean;
  setEdit: any;
};

type FormValues = {
  newContent: string;
};

const schema  = z.object({
  newContent: z.string().min(1, "レポートを入力してください").max(400, "400文字以内で入力してください").refine(newContent => newContent.trim().length > 0, "空白は無効です"),
});

export default function EditReportForm({content, id, edit, setEdit} : ReportContentProps) {
  const [charCountError, setCharCountError] = useState('');
  const fetchMonthlyReport = useDashboardStore((state) => state.fetchMonthlyReport);

  const form = useForm({
    initialValues: {
      newContent: content,
    },
    validate: zodResolver(schema),
  });

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputContent = event.target.value;
    if (inputContent.length > 400) {
      setCharCountError('400文字以内で入力してください');
    } else {
      setCharCountError('');
    }
    form.setFieldValue('newContent', inputContent);
  };

  const handleUpdate = async (values: FormValues) => {
    if (values.newContent.trim() !== content.trim()) {
      try {
        await axios.patch(`/features/report/api/updateMonthlyReport/${id}`, {
          monthly_report: {
            content: values.newContent,
          },
        });
        showSuccessNotification(`更新しました`);
        setEdit(false)
        fetchMonthlyReport(true);
      } catch (error) {
        showErrorNotification('更新に失敗しました');
      }
    }
  }

  return (
    <>
      <form onSubmit={form.onSubmit(handleUpdate)} className='w-full'>
        <div className='flex justify-end items-center pr-2 pb-2'>
          {id > 0 ? 
            (
              <Tooltip label="更新" arrowOffset={50} position="right" arrowSize={5} withArrow>
                <button type="submit" className='p-1 hover:bg-gray-200'>
                  <ArrowPathIcon className="w-6 h-6 text-gray-500"/>
                </button>
              </Tooltip>
            ):(
              null
            )}
          <CancelActionIcon edit={edit} setEdit={setEdit}/>
        </div>
        <div className="p-4 bg-white rounded-sm">
          <Textarea
            {...form.getInputProps('newContent')}
            name="newContent" 
            autosize
            minRows={14}
            maxRows={14}
            onChange={handleContentChange}
            error={charCountError} // エラーメッセージの表示
          />
        </div>
      </form>
    </>
  )
}
