export default function HeaderMenu() {
  return (
    <>
      {/* ヘッダーメニュー */}
      <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">Dairy Record</a>
        <a className="mr-5 hover:text-gray-900">Report</a>
        <a className="mr-5 hover:text-gray-900">Summary creation</a>
        <a className="mr-5 hover:text-gray-900">Teams</a>
      </nav>
    </>
  )
}