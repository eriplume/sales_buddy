"use client"
import { useState } from 'react';
import { ActionIcon, Checkbox, Tooltip, Rating } from "@mantine/core"
import { CheckIcon, TrashIcon, PencilSquareIcon, ClockIcon } from '@heroicons/react/24/outline';
import UserStatus from "@/app/components/base/UserStatus"
import DefaultUserImage from "@/app/components/ui/DefaultUserImage"

export default function TaskIndex() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <>
        <div className="container py-4 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md border-4 border-blue-100">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">月末業務タスク</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-gray-600 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md border-4 border-orange-100">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">ストック整理</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">倉庫整理</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">スタイリング撮りだめ</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">入力作業</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">月末業務タスクだヨヨ</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='lg'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="md" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
            <div className="p-2 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg bg-white shadow-md">
                <UserStatus />
                <div className="flex-grow">
                  <h2 className="text-gray-600 font-bold ml-2 lg:ml-4">月末業務タスクだヨヨ</h2>
                  <div className='flex flex-row items-center'>
                    <ClockIcon className='w-5 h-5 text-gray-500 ml-2 lg:ml-4 mr-1' />
                    <div className="text-red-400 mr-3 lg:mr-5">12/30</div>
                    <Rating defaultValue={2} size="sm" count={3} color="#93c5fd" value={value} onChange={setValue}/>
                  </div>
                </div>
                <div className='flex ml-2'>
                <Tooltip label="DONE?" arrowOffset={50} arrowSize={5} withArrow>
                  <Checkbox
                    size='xl'
                    color="#93c5fd"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    className="shadow-md"
                    variant="outline"
                  />
                </Tooltip>
                </div>
                <div className='flex ml-2'>
                  <ActionIcon variant="outline" color="#cbd5e1" size="lg" className="shadow-md hover:text-gray-500 transition-transform">
                    <PencilSquareIcon className='w-8 h-8 p-1' />
                  </ActionIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
