'use client'
import Menu from "./components/menu"
import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data: session } = useSession()
  const [message, setMessage] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (session?.user?.email) {
      setMessage(`Successfully logged in as ${session.user.email}`)
    }
  }, [session])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <Menu />
      <main className="container py-8">
        {session ? (
          <div className="card max-w-md mx-auto">
            {message && <div className="success-message mb-4">{message}</div>}
            {/* <button 
              onClick={() => router.push('/logout')} 
              className="btn btn-primary w-full"
            >
              Sign out
            </button> */}
          </div>
        ) : (
          <div className="card max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-muted mb-4">Please sign in to continue</p>
            {/* <button 
              onClick={() => router.push('/login')} 
              className="btn btn-primary w-full"
            >
              Sign in
            </button> */}
          </div>
        )}
      </main>
    </div>
  )
}