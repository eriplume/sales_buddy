import { Metadata } from 'next'
import TermsOfService from '../components/base/TermsOfService'

export const metadata: Metadata = {
  title: 'terms of service',
}

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <TermsOfService />
    </div>
  )
}
