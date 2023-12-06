"use client"
import { useSession } from "next-auth/react";
import  LoginButton  from "../LoginButton";
import ProfileDropdown from "./ProfileDropdown";
import HeaderMenu from "./HeaderMenu";

export default function UserStatus () {
  const { data: session } = useSession();

  return session ? (
    <>
    <HeaderMenu />
    <ProfileDropdown
      image={session.user.image} 
      name={session.user.name} 
    />
    </>
  ) : (
    <div className="w-24 sm:w-32">
      <LoginButton/>
    </div>
  )
}


