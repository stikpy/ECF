
import React from 'react'
import UserComponent from '../components/userComponent/page'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { User } from "../user"
import SignOut from '../components/SignOut/page'


async function TestAuth() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <SignOut />
    <p>SERVER CALL</p>
    <UserComponent/>
    <p>CLIENT CALL</p>
    <User />
    </>
  )
}

export default TestAuth