import { Textarea } from '@mantine/core';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';

const schema  = z.object({
  content: z.string().min(1,  { message: '必ず入力してください' }),
});

export default function ReportInputForm() {

  const form = useForm({
    initialValues: {
      content: '',
    },
    validate: zodResolver(schema),
  });

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form className='w-full'>
          <Textarea
          {...form.getInputProps('content')}
            placeholder="今週の振り返り。200字以内で入力してください"
            label="週間レポート"
            size="xs"
            withAsterisk
            autosize
            minRows={6}
            maxRows={7}
          />
        </form>
      </div>
    </>
  );
}