import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your name",
        },
        password: { label: "Password", type: "Enter your password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password }: any = credentials;
        if (email !== "john@gmail.com" && password !== "123456") {
          return null;
        } else {
          return { id: 1234, name: "JohnDoe", email: "john@gmail.com" } as any;
        }
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
