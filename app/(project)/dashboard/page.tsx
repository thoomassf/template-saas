import { handleAuth } from "@/app/actions/handle-auth"
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const session = await auth()

  console.log(session)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-10">Protected Dashboard</h1>

      <p>{session?.user?.email ? session?.user?.email : 'Usuario nao esta logado'}</p>

      {session.user?.email && (
        <form
          action={handleAuth}
        >
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Logout</button>
        </form>
      )}
    </div>
  )
}