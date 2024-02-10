import Footer from "../components/base/Footer"
import Header from "../components/base/Header"
import FooterMenu from '../components/base/FooterMenu';
import NavbarForPC from '../components/base/NavbarForPC';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      <div className="flex flex-col xl:flex-row xl:w-5/6 xl:justify-center xl:mx-auto">
        <div className="hidden xl:block xl:w-1/4">
          <div className='flex flex-col bg-white min-h-full'>
              <div className='h-hull py-4'>
                <NavbarForPC/>
              </div>
          </div>
        </div>
        <div className="xl:flex-grow xl:w-3/4"> {/* メインコンテンツ */}
          {children}
        </div>
      </div>
      <Footer />
      <FooterMenu/>
    </>
  )
}
