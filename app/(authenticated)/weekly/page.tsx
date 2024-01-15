import { Metadata } from 'next';
import Weekly from '@/app/components/page/Weekly/Weekly';

export const metadata: Metadata = {
  title: 'weekly',
}

export default function page() {
  return <Weekly/>
}
