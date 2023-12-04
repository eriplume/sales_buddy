"use client"
import { useSession } from "next-auth/react";
import  { LoginButton }  from './LoginButton'
import { LogoutButton } from './LogoutButton';


const AuthButton = () => {
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
};

export default AuthButton;