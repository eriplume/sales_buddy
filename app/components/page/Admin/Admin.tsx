"use client"
import useFetchRole from "@/app/features/admin/hooks/useAdmin";
import Loading from "../../ui/Loading";
import useUserStore from "@/store/userStore";

export default function Admin() {
  useFetchRole();
  const { admin } = useUserStore();

  if (admin === undefined) (<Loading size="xs"/>);

  return (
    <div>
      {admin === true ? <p>管理画面</p>: <p>権限がありません</p> }
    </div>
  )
}
