"use client"
import { useSession } from "next-auth/react";
import ProfileDropdown from "./ProfileDropdown";
import Loading from "../ui/Loading";
import LoginIcon from "../ui/LoginIcon";


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
    <div className="flex items-center lg:mr-8 mr-3">
      <LoginIcon />
    </div>
  )
}


