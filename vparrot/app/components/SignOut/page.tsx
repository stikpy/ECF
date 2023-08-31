'use client';
import { signOut } from "next-auth/react"

export default () => {
  return (
    <button className="btn" onClick={() => signOut({ callbackUrl: '/' })}>
      Sign out
    </button>
  );
}
