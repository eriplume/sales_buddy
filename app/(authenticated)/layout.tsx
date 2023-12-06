import RequireAuth from "@/lib/RequireAuth"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <RequireAuth>
        {children}
        </RequireAuth>
      </div>
    </>
  )
}