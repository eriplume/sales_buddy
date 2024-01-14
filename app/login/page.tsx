import Auth from "../components/page/Top/Auth"
import Footer from "../components/base/Footer"

export default function page() {
  return (
    <>
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <Auth/>
    </div>
    <Footer />
  </>
  )
}
