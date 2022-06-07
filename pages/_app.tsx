import type {AppProps} from "next/app";
import Head from "next/head";

import "../globals.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
    <Head>
      <title>Tiency</title>
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default App;