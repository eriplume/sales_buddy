"use client"
import Link from 'next/link';
import { Alert } from '@mantine/core';
import { InformationCircleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function AlertDemo() {
  const icon = <InformationCircleIcon className='w-5 h-5'/>;
  return (
    <Alert variant="filled" color="#93c5fd" title="サンプルページです" icon={icon}>
      <p>データ登録はできませんが全て閲覧可能なのでぜひ触ってみてください！</p>
      <div className='mt-1'>
        <Link href='/' className='flex flex-row items-center underline hover:text-sky-800 cursor-pointer'>
          <ArrowUturnLeftIcon className="w-4 h-4 mr-1" />
            <div>TOPに戻る</div>
        </Link>
      </div>
    </Alert>
  )
}
