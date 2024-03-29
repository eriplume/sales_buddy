"use client"
import axios from 'axios'
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import useTaskStore from '@/store/taskStore';
import useTeamStore from '@/store/teamStore';
import { fetchTasks } from '../../teamTask/hooks/fetchTask';
import { fetchTeamMembers } from '../hooks/fetchTeamMembers';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';
import { TextInput, PasswordInput } from "@mantine/core"
import PlusButton from "@/app/components/ui/button/PlusButton"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { TriangleIcon } from '@/app/components/ui/icon/Triangle';
import CopyInfo from './CopyInfo';

type FormProps = {
  apiEndpoint: string;
  buttonLabel: string;
  isCreatingGroup: boolean;
  isCreationSuccess: boolean
  setIsCreationSuccess: (value: boolean) => void
}

type FormValues = {
  name: string;
  keyword: string;
};

const schema  = z.object({
  name: z.string().min(1, '1~20文字で入力してください').max(20, '1~20文字で入力してください').refine(name => name.trim().length > 0, '1~20文字で入力してください'),
  keyword: z.string()
            .min(8, '8文字以上で入力してください')
            .max(20, '20文字以内で入力してください')
            .regex(/^[A-Za-z0-9]+$/, '半角英数で入力してください'),
});

export default function Form({apiEndpoint, buttonLabel, isCreatingGroup, isCreationSuccess, setIsCreationSuccess }: FormProps) {
  const { setMembers } = useTeamStore();
  const { setTeamTasks, setUserTasks } = useTaskStore();
  const endpoint = apiEndpoint;
  
  const form = useForm({
    initialValues: {
      name: '',
      keyword: '',
    },
    validate: zodResolver(schema),
  });

  const groupLabel = () => {
    return (
      <>
        <div className="flex flex-row justify-start">
          <TriangleIcon className="w-5 h-5 mr-2 text-blue-300" />
          <div className='text-gray-800'>チーム名</div>
        </div>
      </>
    );
  };

  const keywordLabel = () => {
    return (
      <>
        <div className="flex flex-row justify-start">
          <TriangleIcon className="w-5 h-5 mr-2 text-blue-300" />
          <div className='text-gray-800'>キーワード</div>
        </div>
      </>
    );
  };

  const handleSubmit = async (values: FormValues) => {
    const isConfirmed = confirm("チームは１つしか所属できません。このチームに所属しますか？");
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.post(`/features/teamJoin/api/${endpoint}`, {
        group: {
          name: values.name,
          password: values.keyword,
        },
      });
      showSuccessNotification(`登録しました`);
      fetchTeamMembers({setMembers})
      fetchTasks({ setTeamTasks, setUserTasks })
      if (isCreatingGroup) {
        setIsCreationSuccess(true);
      } else {
        window.location.reload();
      }
    } catch (error) {
      // `error` が AxiosError かどうかを確認
      if (axios.isAxiosError(error) && error.response) {
        // エラーレスポンスからメッセージを取得
        const errorMessage = error.response.data.error || '予期せぬエラーが発生しました';
        showErrorNotification(errorMessage);
      } else {
        // AxiosError 以外のエラーの場合
        showErrorNotification('予期せぬエラーが発生しました');
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        {!isCreationSuccess ? (
          <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
            <TextInput
              {...form.getInputProps('name')}
              name="name" 
              label={groupLabel()}
              placeholder="例：〇〇店, 商品部, VMDチーム など"
              description="1~20文字で入力してください"
              className='mb-6'
            />
            <PasswordInput
              {...form.getInputProps('keyword')}
              name="keyword" 
              label={keywordLabel()}
              placeholder="例：sample123"
              description="半角英数8~20文字で入力してください"
              visibilityToggleIcon={({ reveal }) =>
                reveal ? (
                  <EyeSlashIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                ) : (
                  <EyeIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
                )
              }
              className='mb-7'
            />
            <div className="flex justify-center w-full mt-4">
              <PlusButton size="sm" type="submit">{buttonLabel}</PlusButton>
            </div>
          </form>
        ) : (
          <CopyInfo TeamInfo={form.values}/>
        )}
      </div>
    </>
  )
}
