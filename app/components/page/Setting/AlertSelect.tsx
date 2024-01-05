import { Radio, Group, Button} from '@mantine/core';
import { TriangleIcon } from '../../ui/icon/Triangle';
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type AlertSelectProps = {
  handleUpdate: () => Promise<void>;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  currentSetting: boolean;
}

export default function AlertSelect({handleUpdate, checked, setChecked, currentSetting} :AlertSelectProps) {

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

  const isButtonDisabled = checked === currentSetting;
  const icon = <ArrowPathIcon className='w-5 h-5 text-blue-400' />;

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
            <Button variant='outline' size="xs" color='#9ca3af' rightSection={icon} onClick={handleUpdate} disabled={isButtonDisabled}>
              更新
            </Button>
          </div>
        </Group>
      </Radio.Group>
    </>
  )
}
