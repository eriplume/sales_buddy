import FooterMenu from "../components/base/FooterMenu"
import Footer from "../components/base/Footer"
import AlertDemo from "../components/ui/AlertDemo"

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
      <FooterMenu/>
    </>
  )
}