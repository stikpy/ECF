
import React from 'react'

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { User } from "../user"
import SignOut from '../Components/SignOut'


async function TestAuth() {
  const session = await getServerSession(authOptions)
  console.log(session);
  
  return (
    <>
    <SignOut />
    <p>SERVER CALL</p>
   
    <p>CLIENT CALL</p>
    <User />
    </>
  )
}

export default TestAuth