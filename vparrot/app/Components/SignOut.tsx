'use client';
import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <button className="btn" onClick={() => signOut({ callbackUrl: '/' })}>
      Sign out
    </button>
  );
};

SignOut.displayName = 'SignOut';

export default SignOut;
