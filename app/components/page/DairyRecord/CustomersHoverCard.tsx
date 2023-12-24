import { HoverCard, Text, Group, ActionIcon  } from '@mantine/core';
import { UsersIcon } from "@heroicons/react/24/outline";
import CustomersList from './CustomersList';

export default function CustomersHoverCard() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <ActionIcon variant="light" size="lg" color="#60a5fa" radius="xl" aria-label="Settings" className="shadow-md hover:-translate-y-1 hover:text-sky-700 transition-transform">
            <UsersIcon className="w-10 h-10 m-1 p-1"/>
          </ActionIcon>
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