"use client"
import { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import useCalculationStore from '@/store/calculationStore';
import { NumberInput, Select, Button } from '@mantine/core';
import { PlusCircleIcon } from "@heroicons/react/24/solid";

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
  const { addToTotal, options, fetchOptions } = useCalculationStore();

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

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={form.onSubmit(handleSubmit)} className='w-full mx-auto px-2'>
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
            <Button type="submit" variant="outline" color="gray" size="xs">
              加算する
              <PlusCircleIcon className="w-5 h-5 ml-1 text-blue-400" />
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}