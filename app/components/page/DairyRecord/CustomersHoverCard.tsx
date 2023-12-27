import { HoverCard, Text, Group, ActionIcon  } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import CustomersList from './CustomersList';

export default function CustomersHoverCard() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <ActionIcon variant="outline" size="lg" color="#e2e8f0" radius="md" aria-label="Settings" className="shadow-md hover:translate-y-1 hover:text-sky-700 transition-transform">
            <CursorArrowRaysIcon className="w-5 h-5 text-blue-300 hover:text-sky-700"/>
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