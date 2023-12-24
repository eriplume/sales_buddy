"use client"
import { useSession } from "next-auth/react";
import  LoginButton  from "../LoginButton";
import ProfileDropdown from "./ProfileDropdown";
import HeaderMenu from "./HeaderMenu";
import Loading from "../ui/Loading";

export default function UserStatus () {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <div className="flex items-center md:mr-4 mr-1">
      <HeaderMenu />
      <ProfileDropdown
        image={session.user.image} 
        name={session.user.name} 
      />
    </div>
  ) : (
    <div className="w-24 sm:w-32">
      <LoginButton/>
    </div>
  )
}


