import ReduxStoreProvider from "@/components/redux-store-provider/ReduxStoreProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ReduxStoreProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ReduxStoreProvider>);
}
