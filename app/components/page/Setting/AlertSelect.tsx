"use client"
import { useState, useEffect } from 'react';
import { Radio, Group, Button} from '@mantine/core';
import { TriangleIcon } from '../../ui/icon/Triangle';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function AlertSelect() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`/api/setting`);
        const data = await response.json();
        setChecked(data.notifications);
      } catch (error) {
        console.error('通知設定の取得に失敗しました', error);
      }
    };
    fetchNotifications();
  }, []);

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
        value={checked ? 'true' : 'false'}
        onChange={(value) => setChecked(value === 'true')}
      >
        <Group mt="xs">
          <Radio value="true" label="ON" color="#93c5fd"/>
          <Radio value="false" label="OFF" color="#93c5fd"/>
          <div>
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
