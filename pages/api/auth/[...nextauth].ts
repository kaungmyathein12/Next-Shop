import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { RequestInternal, Awaitable, User } from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: function (
        credentials: Record<"username" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Awaitable<User | null> {
        throw new Error("Function not implemented.");
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
