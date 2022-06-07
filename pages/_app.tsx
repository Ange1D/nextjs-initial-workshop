import type {AppProps} from "next/app";
import Head from "next/head";
import Page from "../components/Page";

import "../globals.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
    <Head>
      <title>Tiency</title>
    </Head>
    <Page>
    <Component {...pageProps} />
    </Page>
  </>
  );
}

export default App;