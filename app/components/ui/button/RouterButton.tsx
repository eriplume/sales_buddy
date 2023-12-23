"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

type RouterButtonProps = {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    children: string;
    path: string;
}

export default function RouterButton({ size, path, children }: RouterButtonProps) {
  const router = useRouter()

  return (
    <Button size={size} variant="outline" color="#64748b" onClick={() => router.push(path)}>
      {children}
      <CursorArrowRaysIcon className="w-5 h-5 ml-1 text-blue-400" />
    </Button>
  )
}
