'use client'
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import DrawerContents from './DrawerContents';

type DrawerMenuProps = {
  navigationItems: any[];
  dashboardPath: string;
  teamsPath: string;
};

export default function DrawerMenu({navigationItems, dashboardPath, teamsPath}: DrawerMenuProps) {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(-1);

  return (
    <>
      <Drawer opened={opened} onClose={toggle}>
        <DrawerContents active={active} setActive={setActive} onClose={toggle} navigationItems={navigationItems} dashboardPath={dashboardPath} teamsPath={teamsPath} />
      </Drawer>
      <Burger opened={opened} onClick={toggle} className="w-6 h-6 mr-2 ml-1 md:ml-4" aria-label="Toggle navigation"/>
    </>
  )
}
