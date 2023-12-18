"use client"
import { NumberInput } from '@mantine/core';
import axios from 'axios';
import { showSuccessNotification } from '@/utils/notifications';
import { showErrorNotification } from '@/utils/notifications';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button } from '@mantine/core';

type targetValues = {
  target: number;
};

const schema  = z.object({
  target: z.number().min(1,  { message: '0より大きな値を入力してください' }),
});


export default function TargetInputForm() {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      target: 0,
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: targetValues) => {
    console.log(values)
    // try {
    //   const response = await axios.post(`/api/weekly_target`, { 
    //     weekly_target: values
    //   });

    //   // response.dataから日付を取得
    //   const date = response.data.weekly_target.date;
    //   showSuccessNotification(`${date}の目標を登録しました`);
    //   router.push('/dashboard');
    // } catch (error) {
    //   showErrorNotification('送信に失敗しました。もう一度お試しください。');
    //   console.error("Failed to fetch", error);
    // }
  };


  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full mx-auto px-6'>
          <NumberInput
          {...form.getInputProps('target')}
            placeholder="100万円"
            suffix="万円"
            mt="md"
          />

          <div className="flex justify-end mt-4">
            <Button type="submit" variant="outline" color="gray" size="xs">
              登録する
              <PlusCircleIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}