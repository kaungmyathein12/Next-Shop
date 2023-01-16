import { SessionProvider } from "next-auth/react";
import NavBar from "../components/NavBar";

import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

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
