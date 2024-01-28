"use client"
import Image from 'next/image';
import logoImage from "@/public/salesbuddy_logo.png";
import useFetchRole from '../features/admin/hooks/useAdmin';
import useUserStore from '@/store/userStore';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Loading from '../components/ui/Loading';
import Navbar from '../features/admin/components/base/Navbar';

export default function Layout({children}: {children: React.ReactNode}) {
  useFetchRole();
  const { admin } = useUserStore();
  const [opened, { toggle }] = useDisclosure();
  
  if (admin === undefined) {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <Loading size="md" />
      </div>
    )
  }

  if (admin === false) {
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='text-md'>権限がありません</div>
      </div>
    )
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <div className='flex flex-row items-center p-3'>
          <div className='md:hidden'>
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
            />
          </div>
          <Image className="object-cover ml-4" alt="bg" src={logoImage} width={40} height={40} priority/>
          <div className='text-gray-500 font-bold ml-2'>Admin</div>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md"><Navbar/></AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}