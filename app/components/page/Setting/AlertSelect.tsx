"use client"
import { useState } from 'react';
import { Radio, Group, Button} from '@mantine/core';
import { TriangleIcon } from '../../ui/icon/Triangle';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function AlertSelect() {
  const [checked, setChecked] = useState(false);

  const label = () => {
    return (
      <>
        <div className="flex flex-row justify-start">
          <TriangleIcon className="w-5 h-5 mr-2 text-gray-400" />
          <div className='text-gray-800'>週間レポート登録をリマインド</div>
        </div>
      </>
    );
  };

  return (
    <>
    <Radio.Group
      name="select"
      label={label()}
      description="ONにすると毎週日曜日にお知らせします"
    >
      <Group mt="xs">
        <Radio value="true" label="ON" color="#93c5fd"/>
        <Radio value="false" label="OFF" color="#93c5fd"/>
        <div className=''>
      <Button variant='outline' size="xs" color='#9ca3af'>
        更新
        <ArrowPathIcon className="w-5 h-5 ml-2 text-blue-400" />
    </Button>
      </div>
      </Group>
    </Radio.Group>
    </>
  )
}
