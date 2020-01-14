import App from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";
import Head from "next/head";
import withData from "../lib/withdata";
import Page from "../components/Page";

import "./style.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the users
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Esports Daily!</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <ApolloProvider client={apollo}>
          <ApolloProviderHooks client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProviderHooks>
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
