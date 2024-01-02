"use client"
import { useSession } from "next-auth/react";
import  LoginButton  from "../LoginButton";
import ProfileDropdown from "./ProfileDropdown";
import Loading from "../ui/Loading";

export default function UserStatus () {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading size="sm"/>;
  }

  return session ? (
    <div className="flex items-center md:mr-4 mr-1 hidden md:block">
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


