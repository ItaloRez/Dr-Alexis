import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.scss";
import * as ga from "react-ga";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return;
    ga.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    ga.pageview(window.location.pathname);
  }, []);

  return <Component {...pageProps} />;
}
