import Image from 'next/image'
import localImage from "../../public/btn_login_base.png";
import { signIn } from "next-auth/react"

export const LoginButton = () => (
  <button onClick={() => signIn('line')} >
    <Image 
      src={localImage}
      alt="Login with LINE"
    />
  </button>
);