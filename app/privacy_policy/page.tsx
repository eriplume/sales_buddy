import { Metadata } from 'next'
import PrivacyPolicy from '../components/base/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'privacy policy',
}

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <PrivacyPolicy  />
    </div>
  )
}
