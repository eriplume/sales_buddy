'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import Loading from "@/app/components/ui/Loading";
import { showNotification } from '@mantine/notifications';

export default function RequireAuth ({ 
  children,
}: {
  children: React.ReactNode
}) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      showNotification({
        message: 'ログインが必要です',
        color: 'red',
      });
      router.push('/');
    }
  }, [status, router]);

  if (status === "loading") {
    return (
        <Loading size="md" />
    )
  }

  if (status === 'authenticated') {
    return <>{children}</>;
  }
  
  return null;
};

