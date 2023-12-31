'use client'
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { Burger } from '@mantine/core';
import DrawerContents from './DrawerContents';

export default function DrawerMenu() {
  const { data: session } = useSession();
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0); 

  if(session)
    return (
      <>
        <Drawer opened={opened} onClose={toggle}>
          <DrawerContents active={active} setActive={setActive} onClose={toggle}/>
        </Drawer>
  
        <Burger opened={opened} onClick={toggle} className="w-6 h-6 mr-2 ml-1 md:ml-4" aria-label="Toggle navigation"/>
      </>
    );
}
