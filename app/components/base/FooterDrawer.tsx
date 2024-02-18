"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
  navigationItems: any[];
};

export default function FooterDrawer({ active, setActive, onClose, navigationItems }: DrawerContentsProps) {
  const router = useRouter()

  const handleNavLinkClick = (index: number, path: string) => {
    setActive(index);
    onClose();
    router.push(path);
  };

  return (
    <>
      {navigationItems.slice(0, 3).map((item, index) => (
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