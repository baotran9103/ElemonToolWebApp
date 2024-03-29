import "../../styles/base.css";
import '../../styles/SignIn.css'
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
// import { AppRouter } from '../backend/routes/index';
import { SessionProvider } from "next-auth/react";
import { AppRouter } from "./api/trpc/[trpc]";
function MyApp<AppType>({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = "/api/trpc";
    // const url = process.env.NEXT_PUBLIC_API
    //   ? `https://${process.env.NEXT_PUBLIC_API}/api/trpc`
    //   : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
