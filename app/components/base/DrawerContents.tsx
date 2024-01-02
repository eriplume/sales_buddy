"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';
import { navigationItems } from './navigationItems';
import { HomeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
};

export default function DrawerContents({ active, setActive, onClose }: DrawerContentsProps) {
  const router = useRouter()

  const handleNavLinkClick = (index: number, path: string) => {
    setActive(index);
    onClose();
    router.push(path);
  };

  return (
    <>
      <NavLink
        label="ダッシュボード"
        color="gray"
        leftSection={<HomeIcon className="w-4 h-4" />}
        active={active === -1}
        onClick={() => handleNavLinkClick(-1, '/dashboard')}
      />

      <NavLink
        label="記録する"
        leftSection={<PencilIcon className="w-4 h-4" />}
        defaultOpened
      >
      {navigationItems.map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          color="gray"
          leftSection={item.icon && <item.icon className="w-4 h-4" />}
          onClick={() => handleNavLinkClick(index, item.path)} 
        />
      ))}
      </NavLink>
      <NavLink
        label="coming soon..."
        color="gray"
        leftSection={<UserGroupIcon className="w-4 h-4" />}
        active={active === -2}
        onClick={() => handleNavLinkClick(-2, '/dashboard')}
      />
    </>
  );
}