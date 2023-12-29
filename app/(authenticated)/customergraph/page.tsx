import Breadcrumbs from '@/app/components/ui/Breadcrumbs'
import GraphArea from '@/app/components/page/CustomerGraph/GraphArea'

export default function page() {
  return (
    <>
      <Breadcrumbs>customers graph</Breadcrumbs>
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <GraphArea/>
      </div>
    </>
  )
}
