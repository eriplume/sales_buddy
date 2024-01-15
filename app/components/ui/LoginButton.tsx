"use client"
import Image from 'next/image'
import { handleLogin } from '@/utils/authHelpers';
import localImage from "../../../public/btn_login_base.png";

export default function LoginButton() {
  return(
    <button onClick={handleLogin} >
      <Image 
        src={localImage}
        alt="Login with LINE"
        priority
      />
    </button>
  )
}
