// src/app/logout/page.tsx
'use client'
import { signOut } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Menu from "../components/menu"

export default function LogoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await signOut({ redirect: false })
      router.push('/login?message=Successfully logged out')
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="logout-container">
      <Menu />
      <div className="logout-card">
        <h1>Sign Out</h1>
        <p>Are you sure you want to sign out?</p>
        <div className="button-group">
          <button 
            onClick={handleLogout}
            disabled={isLoading}
            className="logout-button"
          >
            {isLoading ? 'Signing out...' : 'Sign Out'}
          </button>
          <button 
            onClick={() => router.back()}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </div>

      <style jsx>{`
        .logout-container {
          padding: 2rem;
          max-width: 400px;
          margin: 0 auto;
        }
        .logout-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          text-align: center;
        }
        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        .logout-button {
          background: #dc3545;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .logout-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .cancel-button {
          background: #6c757d;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}