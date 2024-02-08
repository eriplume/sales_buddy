"use client"
import axios from 'axios'
import { z } from 'zod';
import { zodResolver } from 'mantine-form-zod-resolver';
import useUserStore from '@/store/userStore';
import useTaskStore from '@/store/taskStore';
import { fetchTasks } from '../hooks/fetchTask';
import { showSuccessNotification, showErrorNotification } from '@/utils/notifications';
import { formatDate } from '@/utils/dateUtils';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { TextInput, Radio, Group, Rating } from "@mantine/core"
import PlusButton from '@/app/components/ui/button/PlusButton';
import { FormLabelAsterisk, FormLabel } from './FormLabel';

type InputFormProps = {
  endpoint: string;
  initialValues: FormValues;
  taskId? :number;
  close: () => void;
  label: string;
}

type FormValues = {
  isTeamTask: string;
  title: string;
  importance: number;
  deadline: Date;
};

const schema  = z.object({
  isTeamTask: z.string().min(1, { message: "選択は必須です" }),
  title: z.string().min(1,  { message: '1~20文字で入力してください' }).max(20, { message: '1~20文字で入力してください' }),
  importance: z.number().refine(val => val !== undefined),
  deadline: z.date().refine(val => val !== undefined, { message: "期限の設定は必須です" }),  
});

export default function InputForm({endpoint, initialValues, taskId, close, label}: InputFormProps) {
  const { setTeamTasks, setUserTasks } = useTaskStore(); 
  const { teamId } = useUserStore();

  const form = useForm({
    initialValues: initialValues,
    validate: zodResolver(schema),
  });

  const handleSubmit = async(values: FormValues) => {
    const payload = {
      task: {
        is_group_task: values.isTeamTask === 'true',
        title: values.title,
        importance: values.importance,
        deadline: formatDate(values.deadline),
        group_id: teamId,
      },
    };
    try {
      if (endpoint === 'createTask') {
        await axios.post(`/features/teamTask/api/${endpoint}`, payload);
        showSuccessNotification(`登録しました`);
        fetchTasks({setTeamTasks, setUserTasks});
        close();
        form.reset();
      } else {
        await axios.patch(`/features/teamTask/api/updateTask/${taskId}`, payload);
        showSuccessNotification(`更新しました`);
        fetchTasks({setTeamTasks, setUserTasks});
        close();
        form.reset();
      }
    } catch (error) {
      showErrorNotification('失敗しました。もう一度お試しください');
    }
  };
    
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>

        <FormLabelAsterisk>タスクの種類</FormLabelAsterisk>
        <Radio.Group
          {...form.getInputProps('isTeamTask')}
          name="isTeamTask"
          className='mb-5'
        >
          <Group mt="xs">
            <Radio value="true" label="チーム" color="#93c5fd"/>
            <Radio value="false" label="自分" color="#93c5fd"/>
          </Group>
        </Radio.Group>

        <FormLabelAsterisk>タスク名</FormLabelAsterisk>
        <TextInput
          {...form.getInputProps('title')}
          name="title" 
          placeholder="例：DM作成, スタイリング撮影 など"
          description="1~20文字で入力してください"
          className='mb-5'
        />

        <FormLabel>優先度</FormLabel>
        <Rating count={3} size="lg" className='mt-2 mb-5' {...form.getInputProps('importance')}/>

        <FormLabelAsterisk>期限</FormLabelAsterisk>
        <DatePickerInput
          {...form.getInputProps('deadline')}
          placeholder="完了したい日付の選択"
          className='mt-3 mb-5'
        />

        <div className="flex justify-center w-full mt-4">
          <PlusButton size="sm" type="submit">{label}</PlusButton>
        </div>
      </form>
    </div>
  )
}
