"use client"
import DrawerMenu from '../../../components/base/DrawerMenu'
import { navigationItemsDemo } from '../../../components/base/navigationItems'

export default function DemoMenu() {
  return (
    <div className="text-gray-600 body-font bg-white items-center md:pb-0 hidden md:block">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-end md:max-w-2xl lg:max-w-4xl">
        <div className=''>sample menu</div>
        <DrawerMenu navigationItems={navigationItemsDemo} dashboardPath='/sample/dashboard' teamsPath='/sample/team'/>
      </div>
    </div>
  )
}
