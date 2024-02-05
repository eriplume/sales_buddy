"use client"
import axios from 'axios'
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { Textarea } from '@mantine/core';
import useTaskStore from '@/store/taskStore';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import PlusButton from "@/app/components/ui/button/PlusButton"
import { fetchTasks } from '../hooks/fetchTask';

type FormValues = {
  content: string;
};

type CommentProps = {
  taskId: number;
}

const schema  = z.object({
  content: z.string().min(1,  { message: '1~100文字で入力してください' }).max(100, { message: '1~100文字で入力してください' }).refine(content => content.trim().length > 0, "空白は無効です"),
});

export default function CommentForm({taskId}: CommentProps) {
  const { setTeamTasks, setUserTasks } = useTaskStore(); 

  const form = useForm({
    initialValues: {
      content: '',
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await axios.post(`/features/teamTask/api/${taskId}/createComment`, {
        comment: {
          content: values.content,
        },
      });
      showSuccessNotification(`登録しました`);
      fetchTasks({setTeamTasks, setUserTasks});
    } catch (error) {
      showErrorNotification('登録に失敗しました。');
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
        <Textarea
          {...form.getInputProps('content')}
          name="content"
          placeholder="コメント"
          description="100字以内で入力してください"
          withAsterisk
          autosize
          minRows={3}
          maxRows={3}
        />
        <div className="flex justify-end w-full mt-4">
          <PlusButton size="sm" type="submit">コメントする</PlusButton>
        </div>
      </form>
    </div>
  )
}
