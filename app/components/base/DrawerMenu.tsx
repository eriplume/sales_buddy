'use client'
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import BurgerIcon from './BurgerIcon';
import DrawerContents from './DrawerContents';

export default function DrawerMenu() {
  const { data: session, status } = useSession();
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0); 

  if(session)
    return (
      <>
        <Drawer opened={opened} onClose={close} size="xs">
          <DrawerContents active={active} setActive={setActive} onClose={close}/>
        </Drawer >
  
        <BurgerIcon open={open}/>
      </>
    );
}
