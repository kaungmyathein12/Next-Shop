import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  const queryClient = new QueryClient();
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}
