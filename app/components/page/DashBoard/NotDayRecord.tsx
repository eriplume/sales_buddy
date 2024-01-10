import RouterButton from "../../ui/button/RouterButton"

type NotDayRecordProps = {
  path: string;
};

export default function NotDayRecord({path} :NotDayRecordProps ) {
  return (
    <>
      <div className="p-4 border-t-4">
        <div className="mb-2">
          <p>売上データがありません。</p>
          <p>売上を登録しますか？</p>
        </div>
        <RouterButton size="sm" path={path}>登録する</RouterButton>
      </div>
    </>
  )
}