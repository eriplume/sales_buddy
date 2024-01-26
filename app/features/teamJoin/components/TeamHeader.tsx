import TeamMembers from "./TeamMembers";

export default function TeamHeader() {
  return (
    <div className="text-gray-600 body-font bg-gray-50 items-center md:pb-0">
      <div className="container mx-auto flex flex-wrap p-4 items-center md:max-w-2xl lg:max-w-4xl">
        <div className="flex flex-row items-center px-6 z-0 max-w-4xl">
          <TeamMembers/>
        </div>
      </div>
    </div>
  )
}
