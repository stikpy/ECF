'use client'

import { useSession } from "next-auth/react"

export const User = () => {
    const { data: session } = useSession()
    console.log('user',session)

    return <pre>{JSON.stringify(session)}</pre>
    
}