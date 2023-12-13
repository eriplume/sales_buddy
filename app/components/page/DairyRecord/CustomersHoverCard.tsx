import { HoverCard, Text, Group, Avatar } from '@mantine/core';
import { UsersIcon } from "@heroicons/react/24/outline";
import CustomersList from './CustomersList';

export default function CustomersHoverCard() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Avatar color="blue" radius="xl">
            <UsersIcon  className="w-5 h-5" />
          </Avatar>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="xs">
            <CustomersList/>
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}