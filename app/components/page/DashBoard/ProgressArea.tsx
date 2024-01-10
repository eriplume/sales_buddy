import { ContentsLink } from './ContentsLink'
import ThisWeek from './ThisWeek'

export default function ProgressArea() {
  return (
    <>
      <div className="flex flex-col w-full max-w-lg mb-5 pb-2">
        <ThisWeek/>
        <ContentsLink/>
      </div>
    </>
  )
}
