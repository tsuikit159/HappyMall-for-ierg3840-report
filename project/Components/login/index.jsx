import Link from "next/link"
import { useSession, signOut } from "next-auth/react";
import { useAuthContext, useAuthContextType } from "../../context/authcontext";
import { useEffect } from "react";

  

export default function Loginsys() {
    const { state, dispatch } = useAuthContext();
    const { data: session, status } = useSession()
    console.log(status)
    function signOutHandle() {
        signOut();
      }
    if (status === "authenticated") {
      return <Link href="/" legacyBehavior>
      <a onClick={() => signOut()} className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
      Sign out
      </a>
    </Link>
    }
    else 
    return <Link href="/login" legacyBehavior>
    <a className="text-black font-semibold transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer">
    login
    </a>
    
  </Link>
  }
