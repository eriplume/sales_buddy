'use client'
import { NumberInput, Select, Button, Group, Box } from '@mantine/core';

export default function RecordInputForm () {

    return (
        <>
        <div className="flex justify-center items-center w-full">
        <form onSubmit={() => console.log('hello')} className="w-full mx-auto px-2">
        <NumberInput
          label="点数"
          withAsterisk
          min={0}
          max={30}
          suffix="点"
          size="xs"
        />
        <NumberInput
          label="金額"
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
        />
        <Group justify="flex-end" mt="md">
          <Button>Submit</Button>
        </Group>
      </form>
      </div>
        </>
    )
}