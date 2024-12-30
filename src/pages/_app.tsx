import "@/styles/globals.css";
import 'react-quill/dist/quill.snow.css';

import type { AppProps } from "next/app";
import { ToasterProvider } from "@/context/toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToasterProvider>
      <Component {...pageProps} />;
    </ToasterProvider>
  )
}