"use client"
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import useCalculationStore from '@/store/calculationStore';
import { NumberInput, Select } from '@mantine/core';
import PlusButton from '../../ui/button/PlusButton';

type FormValues = {
  number: number;
  amount: number;
  customer: string;
};

const schema  = z.object({
  number: z.number().min(1,  { message: '0より大きな値を入力してください' }),
  amount: z.number().min(1, { message: '0より大きな値を入力してください' }),
  customer: z.string().refine(val => val !== '', { message: '客層を選択してください' }),
});

export default function RecordInputForm () {
  const { addToTotal, options } = useCalculationStore();

  const form = useForm({
    initialValues: {
      number: 0,
      amount: 0,
      customer: '',
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = (values: FormValues) => {
    addToTotal(values);
    form.reset();
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full'>
          <NumberInput
            {...form.getInputProps('number')}
            label="点数"
            name="number"
            withAsterisk
            min={0}
            max={30}
            suffix="点"
            size="xs"
          />
          <NumberInput
            {...form.getInputProps('amount')}
            label="金額"
            name="amount" 
            withAsterisk
            min={0}
            max={500000}
            prefix="￥"
            thousandSeparator=","
            size="xs"
            hideControls
          />
          <Select
            key={form.values.customer}
            {...form.getInputProps('customer')}
            label="客層"
            name="customer" 
            withAsterisk
            size="xs"
            data={options.map((option) => ({
              value: option.value.toString(),
              label: option.label,
            }))}
          />

          <div className="flex justify-end mt-4">
            <PlusButton size="xs" type="submit">加算する</PlusButton>
          </div>
        </form>
      </div>
    </>
  )
}