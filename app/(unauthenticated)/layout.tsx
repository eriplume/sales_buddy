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
      <AlertDemo/>
      <DemoMenu/>
      {children}
      <Footer />
      <DemoFooterMenu />
    </>
  )
}