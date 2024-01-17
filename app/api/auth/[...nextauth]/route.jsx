import { connectMongoDB } from "@/lib/mongodb";
import Admin from "@/models/admin";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          await connectMongoDB();
          const admin = await Admin.findOne({ username });

          if (!admin) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, admin.password);

          if (!passwordsMatch) {
            return null;
          }

          return admin;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/adminLogin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
