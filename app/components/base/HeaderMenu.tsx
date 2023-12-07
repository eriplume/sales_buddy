"use client"
import { useRouter } from 'next/navigation';
import { headerNavigationItems } from './navigationItems';

export default function HeaderMenu() {
  const router = useRouter();
  return (
    <>
      <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
        {headerNavigationItems.map((item, index) => (
          <a
            key={index}
            className="mr-5 hover:text-gray-900 flex items-center"
            onClick={() => router.push(item.path)}
          >
            {item.icon && <item.icon className="w-5 h-5 mr-1" />}
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}