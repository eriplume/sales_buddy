import React from 'react'
import DrawerMenu from '../../base/DrawerMenu'

export default function DemoMenu() {
  return (
    <div className="text-gray-600 body-font bg-white items-center md:pb-0">
      <div className="container mx-auto flex flex-wrap p-3 items-center justify-end md:max-w-2xl lg:max-w-4xl">
        <DrawerMenu />
      </div>
  </div>
  )
}
