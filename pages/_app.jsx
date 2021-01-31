/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Head from "next/head";
import "../styles.css";
import store from "../src/app/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>7meeples</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div
            className="main-class"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              width: "100%",
              height: "100vh",
              position: "fixed",
            }}
          >
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
}
