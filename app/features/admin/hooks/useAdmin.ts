"use client"
import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { showErrorNotification } from "@/utils/notifications";

const useFetchRole = () => {
  const { admin, setAdmin } = useUserStore();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await fetch(`/features/admin/api/getRole`);
        const data = await response.json();
        setAdmin(data.admin)
      } catch (error) {
        console.error(error);
        showErrorNotification('データの取得に失敗しました');
      }
    };
    fetchRole();
  }, [admin, setAdmin]);
};

export default useFetchRole;
