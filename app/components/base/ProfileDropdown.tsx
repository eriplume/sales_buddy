"use client"
import { signOut } from 'next-auth/react';
import { UserImageProps } from '@/types/user';
import { Menu } from '@mantine/core';
import { ArrowRightOnRectangleIcon, BellIcon } from "@heroicons/react/24/outline";
import UserImage from '../ui/UserImage'; 

export default function ProfileDropdown ({ image, name }: UserImageProps) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button>
          <UserImage image={image} name={name} />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        {/* メニュー項目 */}
        <Menu.Item leftSection={<BellIcon style={{ width: 14, height: 14 }} />}>
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={<ArrowRightOnRectangleIcon style={{ width: 14, height: 14 }} />}
          onClick={() => signOut()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

