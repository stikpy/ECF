
import {getServerSession} from 'next-auth/next'
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import SignOut from '../components/SignOut/page'
import UserTable from '../components/UserTableView/page'
import TestimonialTableView from '../components/TestimonialTableView/page'



export default async function Connexion () {
  const session = await getServerSession(authOptions)

  if (session?.user.role === "administrateur") {
    return (
      <>
    <div className='flex justify-between m-4'>

    <h1>Bonjour <strong>{session.user.name}</strong>, </h1>
    <p>You are an admin, welcome!</p>
    <SignOut />
    </div>
    <section className="flex flex-col items-center justify-center ">
      <div className='w-8/10'>
        <UserTable />
      </div>
    </section>
    <section>
      <h2>Temoignage</h2>
      <TestimonialTableView />
    </section>

    </>
    )
  }
  else if (session?.user.role === "utilisateur") {
    return (
      <>
    <div className='flex justify-between m-4'>

    <h1>Bonjour <strong>{session.user.name}</strong>, </h1>
    <p>You are a user, welcome!</p>

    <SignOut />
    </div>
    </>
    )
  }

  return <p>You are not authorized to view this page!</p>
}


