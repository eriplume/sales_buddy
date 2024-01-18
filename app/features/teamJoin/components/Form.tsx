"use client"
import axios from 'axios'
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { TextInput, PasswordInput } from "@mantine/core"
import PlusButton from "@/app/components/ui/button/PlusButton"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { TriangleIcon } from '@/app/components/ui/icon/Triangle';
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';

type FormProps = {
  onSubmit: () => void;
}

type FormValues = {
  name: string;
  keyword: string;
};

const schema  = z.object({
  name: z.string().min(1,  { message: '1~20文字で入力してください' }).max(20, { message: '1~20文字で入力してください' }),
  keyword: z.string()
            .min(1, { message: '1~20文字で入力してください' })
            .max(20, { message: '1~20文字で入力してください' })
            .regex(/^[A-Za-z0-9]+$/, { message: '半角英数で入力してください' }),
});

export default function Form() {
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
          <div className='text-gray-800'>グループ名</div>
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
    try {
      await axios.post(`/features/teamJoin/api`, {
        group: {
          name: values.name,
          password: values.keyword,
        },
      });
      showSuccessNotification(`登録しました`);
    } catch (error) {
      showErrorNotification('登録に失敗しました');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
          <TextInput
            {...form.getInputProps('name')}
            name="name" 
            label={groupLabel()}
            placeholder="例：サンプルチーム"
            description="1~20文字で入力してください"
            className='mb-6'
          />
          <PasswordInput
            {...form.getInputProps('keyword')}
            name="keyword" 
            label={keywordLabel()}
            placeholder="例：sample123"
            description="半角英数1~20文字で入力してください"
            visibilityToggleIcon={({ reveal }) =>
              reveal ? (
                <EyeSlashIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
              ) : (
                <EyeIcon style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
              )
            }
            className='mb-7'
          />
          <div className="flex justify-end mt-4">
            <PlusButton size="sm" type="submit">作成する</PlusButton>
          </div>
        </form>
      </div>
    </>
  )
}
