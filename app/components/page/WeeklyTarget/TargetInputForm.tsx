import { NumberInput } from '@mantine/core';
import useWeeklyStore from '@/store/weeklyStore';

export default function TargetInputForm() {
  const { target, setTarget } = useWeeklyStore();

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className='w-full'>
          <NumberInput
            value={target}
            onChange={(value) => setTarget(Number(value))}
            label="目標金額（万）"
            placeholder="100万円"
            description="1~200で入力してください"
            suffix="万円"
            size="xs"
            withAsterisk
            min={0}
            max={200}
            type="tel"
          />
        </div>
      </div>
    </>
  );
}