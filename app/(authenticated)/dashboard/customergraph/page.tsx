import { Metadata } from 'next';
import CustomerGraph from '@/app/components/page/CustomerGraph';

export const metadata: Metadata = {
  title: 'graph',
}

export default function page() {
  return <CustomerGraph />
}
