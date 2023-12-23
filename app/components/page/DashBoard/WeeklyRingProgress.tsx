import { RingProgress, Text } from '@mantine/core';

type RingProgressProps = {
  value: number
};

export default function WeeklyRingProgress({value}:RingProgressProps) {
  return (
    <>
      <RingProgress
        sections={[{ value: value, color: '#93c5fd' }]}
        thickness={17}
        size={140}
        label={
          <Text c="blue" fw={700} ta="center" size="sm">
            {value.toFixed(1)}%
          </Text>
        }
      />
  </>
  )
}
