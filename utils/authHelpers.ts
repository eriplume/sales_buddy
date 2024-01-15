import { signIn } from "next-auth/react";
import { signOut } from 'next-auth/react';

export const handleLogin = () => {
  localStorage.setItem("justLoggedIn", "true");
  signIn("line", { callbackUrl: "/dashboard" });
};

export const handleLogout = () => {
  localStorage.setItem("justLoggedOut", "true");
  signOut({ callbackUrl: '/' });
};