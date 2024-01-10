"use client"
import { useRouter } from 'next/navigation';
import { NavLink } from '@mantine/core';
import { HomeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import UserStatus from './UserStatus';
import ProfileDrawer from './ProfileDrawer';

type DrawerContentsProps = {
  active: number;
  setActive: (index: number) => void;
  onClose: () => void;
  navigationItems: any[];
  dashboardPath: string;
  teamsPath: string;
};

export default function DrawerContents({ active, setActive, onClose, dashboardPath, teamsPath, navigationItems }: DrawerContentsProps) {
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
      {navigationItems.map((item, index) => (
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
        active={active === -3}
        onClick={() => handleNavLinkClick(-2, teamsPath)}
        className='mt-1'
      />

      <NavLink
        label="設定"
        leftSection={<UserStatus />}
        defaultOpened
        className='mt-10'
      >
        <ProfileDrawer active={active} setActive={setActive} onClose={()=> onClose()}/>
      </NavLink>
    </>
  );
}