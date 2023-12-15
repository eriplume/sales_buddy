"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@mantine/core';
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function NotDayRecord() {
  const router = useRouter()
  return (
    <>
      <div className="p-4 border-t">
        <div className="mb-2">
          <p>売上データがありません。</p>
          <p>売上を記録しますか？</p>
        </div>
        <Button type="submit" variant="outline" color="gray" size="sm" onClick={() => router.push('/dairyrecord')}>
          記録しにいく
          <CursorArrowRaysIcon className="w-6 h-6 ml-1 text-blue-400" />
        </Button>
      </div>
    </>
  )
}