'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { UsersIcon, HomeIcon, PencilIcon, Cog8ToothIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import UserStatus from "./UserStatus";
import FooterDrawer from './FooterDrawer';
import ProfileDrawer from './ProfileDrawer';
import TeamDrawer from './TeamDrawer';
import { navigationItems } from './navigationItems';

export default function FooterMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedUser, { open: openUser, close: closeUser }] = useDisclosure(false);
  const [openedTeam, { open: openTeam, close: closeTeam }] = useDisclosure(false);
  const [active, setActive] = useState(-1); 
  const router = useRouter()

  const handleClickDashboard = () => {
    setActive(-1);
    close();
    router.push('/dashboard');
  }

  const title = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full text-sm text-gray-700'>
          <div className='flex w-full items-center'>
            <PencilIcon className="w-5 h-5 mx-2" />
            <div>データを記録する</div>
          </div>
        </div>
      </>
    );
  };

  const titleUser = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full text-sm text-gray-700'>
          <div className='flex w-full items-center'>
            <Cog8ToothIcon className="w-5 h-5 mx-2" />
            <div>設定</div>
          </div>
        </div>
      </>
    );
  };

  const titleTeam = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full text-sm text-gray-700'>
          <div className='flex w-full items-center'>
            <UserGroupIcon className="w-5 h-5 mx-2" />
            <div>チームメニュー</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <footer className="flex flex-row sticky bottom-0 text-gray-600 bg-white z-40 px-3 py-2 border-t md:hidden">
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={handleClickDashboard}>
            <HomeIcon className="w-7 h-8"/>
            <div className='text-xs text-gray-600 mt-1'>dashboard</div>
          </div>
        </div>
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={open} >
            <PencilIcon className="w-7 h-8" />
            <div className='text-xs text-gray-600 mt-1'>create</div>
          </div>
        </div>
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={openTeam}>
            <UsersIcon className="w-7 h-8" />
            <div className='text-xs text-gray-600 mt-1'>team</div>
          </div>
        </div>
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={openUser}>
            <UserStatus />
            <div className='text-xs text-gray-600 mt-1'>setting</div>
          </div>
        </div>
      </footer>

      <Drawer opened={opened} onClose={close} size="40%" position="bottom" title={title()} zIndex={10}>
        <FooterDrawer active={active} setActive={setActive} onClose={close} navigationItems={navigationItems}/>
      </Drawer >

      <Drawer opened={openedTeam} onClose={closeTeam} size="40%" position="bottom" title={titleTeam()} zIndex={10}>
        <TeamDrawer active={active} setActive={setActive} onClose={closeTeam}/>
      </Drawer>

      <Drawer opened={openedUser} onClose={closeUser} size="50%" position="bottom" title={titleUser()} zIndex={10}>
        <ProfileDrawer active={active} setActive={setActive} onClose={closeUser}/>
      </Drawer>
    </>
  )
}