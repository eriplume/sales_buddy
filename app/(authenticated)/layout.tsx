import FooterMenu from "../components/base/FooterMenu"
import Footer from "../components/base/Footer"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
      <Footer />
      <FooterMenu/>
    </>
  )
}