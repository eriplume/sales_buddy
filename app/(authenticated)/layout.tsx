import RequireAuth from "@/lib/RequireAuth"
import FooterMenu from "../components/base/FooterMenu"
import Footer from "../components/base/Footer"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <RequireAuth>
        {children}
        <Footer />
        <FooterMenu/>
      </RequireAuth>
    </>
  )
}