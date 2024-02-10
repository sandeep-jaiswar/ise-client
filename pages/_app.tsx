import ReduxStoreProvider from "@/components/redux-store-provider/ReduxStoreProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import ErrorBoundary from "@/components/errorboundary/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxStoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxStoreProvider>
    </ErrorBoundary>
  );
}
