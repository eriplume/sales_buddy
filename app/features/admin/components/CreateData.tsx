"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { TextInput } from '@mantine/core'
import PlusButton from '@/app/components/ui/button/PlusButton'
import { showErrorNotification, showSuccessNotification } from '@/utils/notifications';

type FormValues = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, {message: '入力してください'}).refine(newContent => newContent.trim().length > 0, '入力してください')
})

export default function CreateData() {
  const router = useRouter();
  
  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await axios.post('/features/admin/api/customerTypes', {
        customer_type: {
          name: values.name
        }
      })
      window.location.reload();
      showSuccessNotification('登録しました');
    } catch (error) {
      showErrorNotification('登録に失敗しました')
    }
  };

  return (
    <div className='w-full'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          {...form.getInputProps('name')}
          name='name'
          label="タイプ名"
        />
        <div className="flex justify-center w-full mt-4">
          <PlusButton size="sm" type="submit">作成する</PlusButton>
        </div>
      </form>
    </div>
  )
}
