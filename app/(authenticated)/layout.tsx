import FooterMenu from "../components/base/FooterMenu"
import Footer from "../components/base/Footer"
import Header from "../components/base/Header"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FooterMenu/>
    </>
  )
}