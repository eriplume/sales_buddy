import { NumberInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';

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
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
          <NumberInput
          {...form.getInputProps('target')}
            label="目標金額（万）"
            placeholder="100万円"
            suffix="万円"
            size="xs"
            withAsterisk
            min={0}
          />
        </form>
      </div>
    </>
  );
}