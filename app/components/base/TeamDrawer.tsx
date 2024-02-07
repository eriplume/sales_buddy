"use client"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { NavLink } from '@mantine/core';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
};

export default function TeamDrawer({ active, setActive, onClose }: DrawerContentsProps) {
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
        active={-6 === active}
        label="チームタスク管理"
        color="gray"
        leftSection={<DocumentCheckIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-6, '/team/task')} 
      />
    </>
) : (
    <>
      <NavLink
        active={-6 === active}
        label="チームタスク管理"
        color="gray"
        leftSection={<DocumentCheckIcon className="w-5 h-5 ml-4" />}
        onClick={() => handleNavLinkClick(-6, '/sample/teams')} 
      />
    </>
  )
}
