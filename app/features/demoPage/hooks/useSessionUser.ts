"use client"
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export const useSessionUserHooks = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return { router, session };
}