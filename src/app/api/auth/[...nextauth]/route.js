// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signOut } from "next-auth/react"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET ,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/login',
//     signOut: '/logout',
//   }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }