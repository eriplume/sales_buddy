"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';
import { navigationItems } from './navigationItems';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
};

export default function FooterDrawer({ active, setActive, onClose }: DrawerContentsProps) {
  const router = useRouter()

  const handleNavLinkClick = (index: number, path: string) => {
    setActive(index);
    onClose();
    router.push(path);
  };

  return (
    <>
      {navigationItems.map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          color="gray"
          leftSection={item.icon && <item.icon className="w-4 h-4 ml-4" />}
          onClick={() => handleNavLinkClick(index, item.path)} 
        />
      ))}
    </>
  );
}