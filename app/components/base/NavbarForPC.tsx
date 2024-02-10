"use client"
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useSession } from "next-auth/react";
import Loading from "../ui/Loading";
import { navigationItems } from "./navigationItems";
import DrawerContents from './DrawerContents';
import { TriangleIcon } from '../ui/icon/Triangle';

export default function NavbarForPC() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(-1);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return (
    <div className='bg-white'>
      <div className="flex flex-row ml-4 mb-3 items-center">
        <TriangleIcon className="w-6 h-6 mr-2 text-blue-300" />
        <div className='text-xl text-gray-800 ml-1'>menu</div>
      </div>
      <DrawerContents active={active} setActive={setActive} onClose={toggle} navigationItems={navigationItems} dashboardPath='/dashboard' />
    </div>
  )
}
