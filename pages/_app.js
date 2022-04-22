import { Fragment } from "react";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "../styles/globals.css";

import { CartProvider } from "react-use-cart";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Moni Inc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
