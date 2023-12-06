"use client"
import { Loader } from '@mantine/core';

type LoadingProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export default function Loading({ size }: LoadingProps) {
  return <Loader color="gray" type="dots" size={size}/>;
}