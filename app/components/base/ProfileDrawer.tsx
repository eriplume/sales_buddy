"use client"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { showSuccessNotification } from '@/utils/notifications';
import { NavLink } from '@mantine/core';
import { BellAlertIcon, ArrowRightOnRectangleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

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

  const handleLogout = () => {
    showSuccessNotification("ログアウトしました")
    setTimeout(() => {
      signOut();
    }, 1000);
  };

  return session ? (
    <>
      <NavLink
        active={-2 === active}
        label="通知設定"
        color="gray"
        leftSection={<BellAlertIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-2, '/setting')} 
      />
      <NavLink
        active={-4 === active}
        label="このアプリについて"
        color="gray"
        leftSection={<QuestionMarkCircleIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-4, '/about')} 
      />
      <NavLink
        label='ログアウト'
        color="gray"
        leftSection={<ArrowRightOnRectangleIcon className="w-5 h-5 ml-4" />}
        onClick={handleLogout}
      />
    </>
  ) : (
    <>
      <NavLink
        active={-2 === active}
        label="通知設定"
        color="gray"
        leftSection={<BellAlertIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-2, '/setting_s')} 
      />
      <NavLink
        active={-4 === active}
        label="このアプリについて"
        color="gray"
        leftSection={<QuestionMarkCircleIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-4, '/about')} 
      />
    </>
  )
}