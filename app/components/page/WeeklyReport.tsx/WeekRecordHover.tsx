import { HoverCard, Text, Group, Avatar } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function WeekRecordHoverCard() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Avatar color="blue" radius="xl">
            <CursorArrowRaysIcon  className="w-5 h-5" />
          </Avatar>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="xs">
            実績
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}