import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import NavBar from "../components/NavBar";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
