import RequireAuth from "@/lib/RequireAuth"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
        <RequireAuth>
        {children}
        </RequireAuth>
    </>
  )
}