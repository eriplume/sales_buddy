"use client"
import Loading from "@/app/components/ui/Loading";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Auth () {
  const { status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'authenticated') {
      // ユーザーがログイン済みの場合、ダッシュボードにリダイレクト
      router.push('/dashboard');
    } 
  }, [status, router]);
  
  if (status === "loading") return <Loading size="md"/>;
};

