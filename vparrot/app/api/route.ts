import {getServerSession} from 'next-auth/next'
import {NextResponse} from 'next/server'
import {authOptions} from "@/app/api/auth/[...nextauth]/route"

// export async function GET(request: Request) {
//     return new Response('Hello, Next.js!', {
//       status: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
//     })
//   }

export async function GET(request : Request){
    const session = await getServerSession(authOptions)
    return NextResponse.json({authenticated:   !!session})
    
} 