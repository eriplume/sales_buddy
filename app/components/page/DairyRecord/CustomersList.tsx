import useCalculationStore from '@/store/calculationStore';
import { List, ThemeIcon, rem } from '@mantine/core';
import { CheckIcon } from "@heroicons/react/24/outline";
import { Text } from '@mantine/core';
import UsersAvatar from './UsersAvatar';

export default function CustomersList() {
  const { customerLabels } = useCalculationStore();

  const items = customerLabels.split('、').map((label) => (
    <List.Item key={label}>
      <Text size="sm" fw={500} component="span">{label}</Text>
    </List.Item>
  ));

  return (
    <div className="flex justify-center items-center w-full">

      {customerLabels.length > 0 ? (
        <div className="flex flex-row justify-center items-center w-full h-20">
        <List
          spacing="xs"
          style={{ height: '80px', overflowY: 'auto' }}
          size="xs"
          center
          icon={
            <ThemeIcon color="rgba(137, 197, 250, 1)" size={16} radius="xl">
              <CheckIcon style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          {items}   
        </List>
        </div>
      ) : (
        <div className="flex flex-row items-center h-20">
        <UsersAvatar/>

          <span className='ml-2'>: 選択されていません</span>

        </div>
      )}

    </div>

  )
}
