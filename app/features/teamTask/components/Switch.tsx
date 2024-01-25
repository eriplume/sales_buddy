"use client"
import { Switch } from '@mantine/core';

type SwitchProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export default function SwithTask({ checked, setChecked }: SwitchProps) {

  const offLabel = () => {
    return (
      <div className='px-1'>
        未完了タスク
      </div>
    );
  };

  const onLabel = () => {
    return (
      <div className='px-1'>
        完了済み
      </div>
    );
  };

  return (
    <div className='flex flex-row ml-5 items-center'>
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        size="lg"
        color="#94a3b8"
        onLabel={onLabel()}
        offLabel={offLabel()}
      />
    </div>
  );
}