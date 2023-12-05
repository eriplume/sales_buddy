import Header from "../components/base/Header"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
    <Header/>
      {children}
    </>
  )
}