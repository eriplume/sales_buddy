"use client"
import axios from 'axios'
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { Textarea, Button } from '@mantine/core';
import useTaskStore from '@/store/taskStore';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { fetchTasks } from '../hooks/fetchTask';

type FormValues = {
  content: string;
};

type CommentProps = {
  taskId: number;
  commentId? :number;
  endpoint: string;
  initialValues: FormValues;
  label: string;
  icon: JSX.Element;
  setCurrentEditingComment?: (comment: Comment | null) => void;
}

const schema  = z.object({
  content: z.string().min(1,  { message: '1~100文字で入力してください' }).max(100, { message: '1~100文字で入力してください' }).refine(content => content.trim().length > 0, "空白は無効です"),
});

export default function CommentForm({taskId, commentId, endpoint, initialValues, label, icon}: CommentProps) {
  const { setTeamTasks, setUserTasks } = useTaskStore(); 

  const form = useForm({
    initialValues: initialValues,
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: FormValues) => {
    const payload = {
      comment: {
        content: values.content 
      },
    };
    try {
      if (endpoint === 'createComment') {
        await axios.post(`/features/teamTask/api/${taskId}/${endpoint}`, payload);
        showSuccessNotification(`登録しました`);
        form.reset();
        fetchTasks({setTeamTasks, setUserTasks});
      } else{
        await axios.patch(`/features/teamTask/api/${taskId}/${endpoint}/${commentId}`, payload);
        showSuccessNotification(`更新しました`);
        form.reset();
        fetchTasks({setTeamTasks, setUserTasks});
      }
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
          minRows={2}
          maxRows={2}
        />
        <div className="flex justify-end w-full mt-4">
          <Button size="sm" type="submit" rightSection={icon} variant="outline" color="#9ca3af">
            {label}
          </Button>
        </div>
      </form>
    </div>
  )
}
