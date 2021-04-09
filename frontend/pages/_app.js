import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";
import withData from "../lib/withData";
import Page from "../components/Page";

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
      <Container>
        <ApolloProvider client={apollo}>
          <ApolloProviderHooks client={apollo}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProviderHooks>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
