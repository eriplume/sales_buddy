"use client"
import { useState, useEffect } from 'react';
import { ResisteredDateRange } from '@/types';
import { isDateInRanges } from '@/utils/dateUtils';
import useWeeklyStore from '@/store/weeklyStore';
import { NumberInput } from '@mantine/core';

type TargetInputFormProps = {
  registeredTargetRanges: ResisteredDateRange[];
};

export default function TargetInputForm({registeredTargetRanges}: TargetInputFormProps) {
  const { target, setTarget } = useWeeklyStore();
  const { targetDateRange } = useWeeklyStore();
  const [isFormDisabled, setFormDisabled] = useState(
    isDateInRanges(targetDateRange[0], registeredTargetRanges)
  );

  useEffect(() => {
    setFormDisabled(isDateInRanges(targetDateRange[0], registeredTargetRanges));
  }, [targetDateRange, registeredTargetRanges]);

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
            size="sm"
            withAsterisk
            min={0}
            max={200}
            type="tel"
            disabled={isFormDisabled}
          />
        </div>
      </div>
    </>
  );
}