import Footer from "../components/base/Footer"
import AlertDemo from "../components/ui/AlertDemo"
import DemoFooterMenu from "../components/page/Demo/DemoFooterMenu"
import DemoMenu from "../components/page/Demo/DemoMenu"

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className="md:sticky top-5 w-full z-30">
        <AlertDemo/>
      </div>
      <div className="md:sticky top-12 w-full z-30">
        <DemoMenu/>
      </div>
      {children}
      <Footer />
      <DemoFooterMenu />
    </>
  )
}