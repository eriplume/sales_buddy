import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-50 md:bg-white">
      <div className="container px-5 p-5 mx-auto flex flex-col sm:flex-row items-center">
        <div className="flex flex-row justify-center items-center">
          <div className="flex title-font font-medium items-center justify-center text-gray-900 text-xs mr-2">
            <div className="flex flex-row items-center">
              <div className="text-sm ml-1">sales buddy</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-0 md:pl-4 md:border-l border-gray-400">© 2024 sales buddy —</p>
        </div>

        {/* 2行目: リンク */}
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <Link href="terms_of_service" className="text-gray-900 text-xs underline sm:ml-1 hover:text-sky-800">terms of service</Link>
          <span className="mx-1">/</span>
          <Link href="privacy_policy" className="text-gray-900 text-xs underline sm:ml-1 hover:text-sky-800">privacy policy</Link>
          <span className="mx-1">/</span>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelZ0KYUju7cveV32wRg-IHfzDjYK4Utv708s3-F7k36C-gTQ/viewform?usp=sf_link" className="text-gray-900 text-xs underline sm:ml-1 hover:text-sky-800">contact</Link>
        </div>
      </div>
    </footer>
  )
}