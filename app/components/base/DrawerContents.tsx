"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';
import { HomeIcon, PencilIcon, UserGroupIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import UserStatus from './UserStatus';
import ProfileDrawer from './ProfileDrawer';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
  navigationItems: any[];
  dashboardPath: string;
};

export default function DrawerContents({ active, setActive, onClose, dashboardPath, navigationItems }: DrawerContentsProps) {
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
        leftSection={<HomeIcon className="w-6 h-6 ml-1 text-gray-500" />}
        active={active === -1}
        onClick={() => handleNavLinkClick(-1, dashboardPath)}
      />

      <NavLink
        label="データを登録する"
        leftSection={<PencilIcon className="w-6 h-6 ml-1 text-gray-500" />}
        defaultOpened
        className='mt-1'
      >
      {navigationItems.slice(0, 3).map((item, index) => (
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          color="gray"
          leftSection={item.icon && <item.icon className="w-5 h-5 ml-4 text-gray-500" />}
          onClick={() => handleNavLinkClick(index, item.path)} 
        />
      ))}
      </NavLink>
      <NavLink
        label="チームメニュー"
        color="gray"
        leftSection={<UserGroupIcon className="w-6 h-6 ml-1 text-gray-500" />}
        defaultOpened
        className='mt-1'
      >
        <NavLink
          key={navigationItems[3].label}
          active={navigationItems[3].index === active}
          label={navigationItems[3].label}
          color="gray"
          leftSection={<DocumentCheckIcon className="w-5 h-5 ml-4 text-gray-500" />}
          onClick={() => handleNavLinkClick(navigationItems[3].index, navigationItems[3].path)} 
        />
      </NavLink>

      <NavLink
        label="設定　|　その他"
        leftSection={<UserStatus />}
        className='mt-10'
      >
        <ProfileDrawer active={active} setActive={setActive} onClose={()=> onClose()}/>
      </NavLink>
    </>
  );
}