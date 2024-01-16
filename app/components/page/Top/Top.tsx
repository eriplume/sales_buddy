"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { checkLogutStatus } from "@/utils/authNotification";
import Loading from "@/app/components/ui/Loading";
import Introduction from "@/app/features/about/components/Introduction";

export default function Top () {
  const { status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'authenticated') {
    // ユーザーがログイン済みの場合、ダッシュボードにリダイレクト
      router.push('/dashboard');
    } 
  }, [status, router]);

  useEffect(() => {
    checkLogutStatus();
  }, []);
  
  if (status === "loading" || status === 'authenticated') 
    return (
      <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
        <Loading size="md"/>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 z-0 max-w-4xl mb-7 mt-4">
      <Introduction />
    </div>
  );
};

