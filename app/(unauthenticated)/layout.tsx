import Footer from "../components/base/Footer"
import AlertDemo from "../components/ui/AlertDemo"
import DemoFooterMenu from "../components/page/Demo/DemoFooterMenu"

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <AlertDemo/>
      {children}
      <Footer />
      <DemoFooterMenu />
    </>
  )
}