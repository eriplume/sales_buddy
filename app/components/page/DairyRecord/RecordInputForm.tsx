'use client'
import useCalculationStore from '@/store/calculationStore';
import { NumberInput, Select, Button, Group } from '@mantine/core';

export default function RecordInputForm () {

  const { addToTotal, options } = useCalculationStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォームデータの取得
    const formData = new FormData(event.currentTarget);
    const amount = parseFloat(formData.get('amount') as string);
    const number = parseFloat(formData.get('number') as string);
    const customer = formData.get('customer') as string;
    
    addToTotal({ amount, number, customer });
    console.log(amount)
    console.log(number)
    console.log(customer)


    // フォームのリセット
    event.currentTarget.reset();
  };

    return (
        <>
        <div className="flex justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="w-full mx-auto px-2">
        <NumberInput
          label="点数"
          name="number"
          withAsterisk
          min={0}
          max={30}
          suffix="点"
          size="xs"
        />
        <NumberInput
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
          label="客層"
          withAsterisk
          size="xs"
          data={options.map((option) => ({
            value: option.value.toString(),
            label: option.label,
          }))}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">加算する</Button>
        </Group>
      </form>
      </div>
        </>
    )
}