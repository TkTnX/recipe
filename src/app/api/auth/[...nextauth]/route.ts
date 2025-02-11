import { prisma } from "@/prisma/prisma";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
    //   TODO: Доделать credentials
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your username",
        },
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
