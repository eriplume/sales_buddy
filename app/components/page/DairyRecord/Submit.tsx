"use client"
import { Fieldset } from '@mantine/core';
import CurrentData from './CurrentData';
import { Button, Group } from '@mantine/core';

export default function Submit() {
  return (
    <>
    <Fieldset legend="現在入力されている合計" className='w-full mt-3 max-w-lg' style={{ overflowX: 'auto' }}>
      <div className="flex flex-col space-y-4 w-full">
        <CurrentData/>

        <Group mt="md" justify="flex-end">
          <Button>Submit</Button>
          <Button>Submit</Button>
      </Group>
      </div>
    </Fieldset>
  </>
  )
}
