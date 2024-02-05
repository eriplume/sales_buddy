"use client"
import { HoverCard, Group } from '@mantine/core';
import { UserIcon } from "@heroicons/react/24/solid";
import UserImage from "@/app/components/ui/UserImage";

type MemberIconProps = {
  imageUrl?: string;
  userName?: string;
};

export default function MemberIcon({imageUrl, userName}: MemberIconProps) {
  return (
    <Group justify="center">
      <HoverCard shadow="md">
        <HoverCard.Target>
          <div><UserImage image={imageUrl} name={userName} /></div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <div className="flex flex-row items-center p-1">
            <UserIcon className='w-5 h-5 mr-1 text-gray-400' />
            <div className="text-gray-500">{userName}</div>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group> 
  )
}
