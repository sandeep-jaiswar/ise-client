import ReduxStoreProvider from "@/components/redux-store-provider/ReduxStoreProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<ReduxStoreProvider>
    <Component {...pageProps} />
  </ReduxStoreProvider>);
}
