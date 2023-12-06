"use client"
import { useSession } from "next-auth/react";
import  LoginButton  from "../LoginButton";
import ProfileDropdown from "./ProfileDropdown";

export default function UserStatus () {
  const { data: session } = useSession();

  return session ? (
    <ProfileDropdown
      image={session.user.image} 
      name={session.user.name} 
    />
  ) : (
    <div className="w-24 sm:w-32">
      <LoginButton/>
    </div>
  )
}


