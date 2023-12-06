"use client"
import { useSession } from "next-auth/react";
import  LogoutButton  from './LogoutButton';
import   LoginButton  from './LoginButton'

export default function AuthenticateButton() {
  const { data: session } = useSession();

  if (session) {
    // ユーザーがログインしている場合、ログアウトボタンを表示
    return (
      <LogoutButton />
    );
  } else {
    // ユーザーがログアウトしている場合、ログインボタンを表示
    return (
      <LoginButton />
    );
  }
}