'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { UsersIcon, HomeIcon, PencilIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { navigationItemsDemo } from '../../../components/base/navigationItems';
import FooterUserStatus from '../../../components/base/UserStatus';
import FooterDrawer from '../../../components/base/FooterDrawer';
import ProfileDrawer from '../../../components/base/ProfileDrawer';

export default function DemoFooterMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedUser, { open: openUser, close: closeUser }] = useDisclosure(false);
  const [active, setActive] = useState(-1); 
  const router = useRouter()

  const handleClick = () => {
    setActive(-1);
    close();
    router.push('/sample/dashboard');
  }

  const handleClickTeam = () => {
    setActive(-3);
    close();
    router.push('/sample/team');
  }

  const title = () => {
    return (
      <>
        <div className='flex flex-row items-start w-full text-sm text-gray-700'>
          <div className='flex w-full items-center'>
            <PencilIcon className="w-4 h-4 mx-2" />
            <div>記録する</div>
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
            <Cog8ToothIcon className="w-4 h-4 mx-2" />
            <div>設定</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <footer className="flex flex-row sticky bottom-0 text-gray-600 bg-white z-40 px-3 py-2 border-t md:hidden">
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={handleClick}>
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
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={handleClickTeam}>
            <UsersIcon className="w-7 h-8" />
            <div className='text-xs text-gray-600 mt-1'>team</div>
          </div>
        </div>
        <div className="w-1/4 p-2">
          <div className='flex flex-col justify-center items-center text-gray-400' onClick={openUser}>
            <FooterUserStatus />
            <div className='text-xs text-gray-600 mt-1'>setting</div>
          </div>
        </div>
      </footer>

      <Drawer opened={opened} onClose={close} size="40%" position="bottom" title={title()} zIndex={10}>
        <FooterDrawer active={active} setActive={setActive} onClose={close} navigationItems={navigationItemsDemo}/>
      </Drawer >

      <Drawer opened={openedUser} onClose={closeUser} size="40%" position="bottom" title={titleUser()} zIndex={10}>
        <ProfileDrawer active={active} setActive={setActive} onClose={closeUser}/>
      </Drawer>
    </>
  )
}