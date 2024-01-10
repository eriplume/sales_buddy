"use client"
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleLogout = () => {
   signOut();
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
    >
    Logout
    </button>
  )
}