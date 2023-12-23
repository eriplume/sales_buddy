import RouterButton from "../../ui/button/RouterButton"

export default function NotDayRecord() {
  return (
    <>
      <div className="p-4 border-t-8">
        <div className="mb-2">
          <p>売上データがありません。</p>
          <p>売上を記録しますか？</p>
        </div>
        <RouterButton size="sm" path="/dairyrecord">登録する</RouterButton>
      </div>
    </>
  )
}