"use client"
import Image from 'next/image'
import { signIn } from "next-auth/react"
import localImage from "../../../public/btn_login_base.png";

export default function LoginButton() {
  return(
    <button onClick={() => signIn('line', { callbackUrl: '/dashboard' })} >
      <Image 
        src={localImage}
        alt="Login with LINE"
        priority
      />
    </button>
  )
}
