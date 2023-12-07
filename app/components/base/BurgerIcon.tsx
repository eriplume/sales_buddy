'use client'
import { Burger } from '@mantine/core';

type DrawerOpenProps = {
  open: () => void;
};

export default function BurgerIcon({ open }: DrawerOpenProps) {
  return (
    <Burger onClick={open} className="w-6 h-6 md:hidden mr-2"/>
  )
}
