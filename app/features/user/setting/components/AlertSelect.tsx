import { Radio, Group, Button} from '@mantine/core';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { TriangleIcon } from '../../../../components/ui/icon/Triangle';

type AlertSelectProps = {
  handleUpdate: () => Promise<void>;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  labelTitle: string;
  description: string;
  groupName: string;
};

export default function AlertSelect({handleUpdate, checked, setChecked, labelTitle, description, groupName} :AlertSelectProps) {

  const label = () => {
    return (
      <>
        <div className="flex flex-row justify-start">
          <TriangleIcon className="w-5 h-5 mr-2 text-gray-400" />
          <div className='text-gray-800'>{labelTitle}</div>
        </div>
      </>
    );
  };

  const icon = <ArrowPathIcon className='w-5 h-5 text-blue-400' />;

  return (
    <>
      <Radio.Group
        name={groupName}
        label={label()}
        description={description}
        value={checked ? 'true' : 'false'}
        onChange={(value) => setChecked(value === 'true')}
      >
        <Group mt="xs">
          <Radio value="true" label="ON" color="#93c5fd"/>
          <Radio value="false" label="OFF" color="#93c5fd"/>
          <div>
            <Button variant='outline' size="xs" color='#9ca3af' rightSection={icon} onClick={handleUpdate}>
              更新
            </Button>
          </div>
        </Group>
      </Radio.Group>
    </>
  )
}
