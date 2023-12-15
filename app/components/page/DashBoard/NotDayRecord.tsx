"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function NotDayRecord() {
  const router = useRouter()
  return (
    <>
      <div className="p-4">
        <div className="mb-2">売上を記録しますか？</div>
        <Button type="submit" variant="outline" color="gray" size="xs" onClick={() => router.push('/dairyrecord')}>
          記録しにいく
          <CursorArrowRaysIcon className="w-5 h-5 ml-1 text-blue-400" />
        </Button>
      </div>
    </>
  )
}