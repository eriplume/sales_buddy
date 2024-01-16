import { Avatar } from '@mantine/core';
import { UsersIcon } from "@heroicons/react/24/outline";

export default function UsersAvatar() {
  return (
    <Avatar color="blue" radius="xl">
      <UsersIcon  className="w-5 h-5" />
    </Avatar>
  )
}
