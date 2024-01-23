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
import { TriangleIcon } from '@/app/components/ui/icon/Triangle';
import PlusButton from '@/app/components/ui/button/PlusButton';

type InputFormProps = {
  endpoint: string;
}

type FormValues = {
  isTeamTask: string;
  title: string;
  importance: number;
  deadline: Date;
};

const schema  = z.object({
  isTeamTask: z.string().refine(val => val !== undefined, { message: "グループの選択は必須です" }),
  title: z.string().min(1,  { message: '1~20文字で入力してください' }).max(20, { message: '1~20文字で入力してください' }),
  importance: z.number().refine(val => val !== undefined, { message: "重要度の選択は必須です" }),
  deadline: z.date().refine(val => val !== undefined, { message: "期限の設定は必須です" }),  
});

export default function InputForm({endpoint}: InputFormProps) {
  const { setTasks } = useTaskStore(); 
  const { teamId } = useUserStore();

  const form = useForm({
    initialValues: {
      isTeamTask: '',
      title: '',
      importance: 0,
      deadline: new Date(),
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async(values: FormValues) => {
    try {
      await axios.post(`/features/teamTask/api/${endpoint}`, {
        task: {
          is_group_task: values.isTeamTask === 'true',
          title: values.title,
          importance: values.importance - 1,
          deadline: formatDate(values.deadline),
          group_id: teamId,
        },
      });
      showSuccessNotification(`登録しました`);
      fetchTasks(setTasks);
      form.reset();
    } catch (error) {
      showErrorNotification('登録に失敗しました。');
    }
  };
    
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
          <div className="flex flex-row items-center">
            <TriangleIcon className="w-4 h-4 mr-2 text-sky-800" />
          <div className='text-gray-800'>タスクの種類</div>
        </div>
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

        <div className="flex flex-row items-center">
          <TriangleIcon className="w-4 h-4 mr-2 text-sky-800" />
          <div className='text-gray-800'>タスク名</div>
        </div>
        <TextInput
          {...form.getInputProps('title')}
          name="title" 
          placeholder="例：DM作成, スタイリング撮影 など"
          description="1~20文字で入力してください"
          className='mb-5'
        />

        <div className="flex flex-row items-center">
          <TriangleIcon className="w-4 h-4 mr-2 text-sky-800" />
          <div className='text-gray-800'>優先度</div>
        </div>
        <Rating count={3} size="lg" className='mt-2 mb-5' {...form.getInputProps('importance')}/>

        <div className="flex flex-row items-center">
          <TriangleIcon className="w-4 h-4 mr-2 text-sky-800" />
          <div className='text-gray-800'>期限</div>
        </div>
        <DatePickerInput
          {...form.getInputProps('deadline')}
          placeholder="完了したい日付の選択"
          className='mt-3 mb-5'
        />

        <div className="flex justify-center w-full mt-4">
          <PlusButton size="sm" type="submit">追加する</PlusButton>
        </div>
      </form>
    </div>
  </>
  )
}
