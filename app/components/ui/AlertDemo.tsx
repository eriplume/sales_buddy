"use client"
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Alert } from '@mantine/core';

export default function AlertDemo() {
  const icon = <InformationCircleIcon />;
  return (
    <Alert variant="light" color="blue" title="サンプルページです" icon={icon}>
      <p>データ登録はできませんが全て閲覧可能なのでぜひ触ってみてください。</p>
    </Alert>
  )
}
