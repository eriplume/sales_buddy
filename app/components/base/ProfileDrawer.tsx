"use client"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { NavLink } from '@mantine/core';
import { BellAlertIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
};

export default function ProfileDrawer({ active, setActive, onClose }: DrawerContentsProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavLinkClick = (index: number, path: string) => {
    setActive(index);
    onClose();
    router.push(path);
  };

  return session ? (
    <>
      <NavLink
        active={-2 === active}
        label="通知設定"
        color="gray"
        leftSection={<BellAlertIcon className="w-4 h-4 ml-4" />}
        onClick={() => handleNavLinkClick(-2, '/setting')} 
      />
      <NavLink
        label='ログアウト'
        color="gray"
        leftSection={<ArrowRightOnRectangleIcon className="w-4 h-4 ml-4" />}
        onClick={() => signOut()} 
      />
    </>
  ) : (
    <>
      <NavLink
        active={-2 === active}
        label="通知設定"
        color="gray"
        leftSection={<BellAlertIcon className="w-4 h-4 ml-4" />}
        onClick={() => handleNavLinkClick(-2, '/setting_s')} 
      />
    </>
  )
}