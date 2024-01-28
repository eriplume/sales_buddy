import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}