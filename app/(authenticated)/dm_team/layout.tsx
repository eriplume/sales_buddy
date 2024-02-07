import TeamHeader from "@/app/features/teamJoin/components/TeamHeader"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <TeamHeader />
      {children}
    </>
  )
}