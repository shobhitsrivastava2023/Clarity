import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!
import { verifyPassword } from "./utils/password"
 import { prisma } from "@/db/prisma"
import { isValid } from "zod"
import { verify } from "crypto"
import credentials from "next-auth/providers/credentials"
export const { handlers, signIn,  signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {label: "email", type: "text"},
        password: {label: "Password", type: "text"},
      },
      authorize: async (credentials) => {
      
        if(!credentials?.email || !credentials?.password){
          throw new Error ("missing password or email"); 
        }
        const user = await prisma?.userRegister.findUnique({
          where : {email: credentials.email as string}

        });
        
        if(!user){
          throw new Error("doesnt exist"); 

        }

        return {id: user?.id, email:user?.email}     
      },
    }),
  ],
  session: {
    strategy: "jwt"
  }, 
  secret : process.env.AUTH_SECRET,
})

