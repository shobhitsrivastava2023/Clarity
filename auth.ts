import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials" // Import credentials provider

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({  
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials

        // Logic to salt and hash the password
        const pwHash = saltAndHashPassword(password)

        // Logic to verify if the user exists in the database
        const user = await getUserFromDb(email, pwHash)

        if (!user) {
          // If no user found, throw an error (can also handle registration here)
          throw new Error("User not found.")
        }

        // Return user object with their profile data
        return user
      },
    }),
  ],
})
