import "@/styles/globals.css";
import 'react-quill/dist/quill.snow.css';

import type { AppProps } from "next/app";
import { ToasterProvider } from "@/context/toaster";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ToasterProvider>
        <Component {...pageProps} />;
      </ToasterProvider>
    </SessionProvider>
  )
}