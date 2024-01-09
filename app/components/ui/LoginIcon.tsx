"use client"
import { signIn } from "next-auth/react"
import { ActionIcon } from '@mantine/core';
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function LoginIcon() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="text-xs mr-1">login</div>
      <ActionIcon
        variant="transparent"
        color="#e2e8f0"
        aria-label="Settings" 
        className="shadow-md hover:text-sky-700"
        onClick={() => signIn('line')}
      >
        <ArrowLeftOnRectangleIcon className="w-9 h-9 text-gray-400 hover:text-sky-700"/>
      </ActionIcon>
    </div>
  )
}
