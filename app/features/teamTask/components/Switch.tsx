"use client"
import { useState } from 'react';
import { Switch } from '@mantine/core';

export default function SwithTask() {
  const [checked, setChecked] = useState(false);
  return (
    <div className='flex flex-row ml-5 items-center'>
      <div className='text-xs mr-2'>完了タスクを表示</div>
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        size="md"
      />
    </div>
  );
}