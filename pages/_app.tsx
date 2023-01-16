import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import NavBar from "../components/NavBar";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
