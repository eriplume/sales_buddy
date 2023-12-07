import Auth from "@/lib/Auth";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Auth/>
      <p>トップページです</p>
    </div>
  )
}
