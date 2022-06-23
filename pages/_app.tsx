// Boilerplate
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Google
import {
  Wrapper as GoogleWrapper,
  Status,
} from "@googlemaps/react-wrapper";

// Styled Components
import { ThemeProvider } from "styled-components";
import { mainTheme } from "styles/styledComponents/themes";
import GlobalStyle from "styles/styledComponents/global";

function MyApp({ Component, pageProps }: AppProps) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <GoogleWrapper
        apiKey={apiKey as string}
        libraries={["places"]}
        render={render}
      >
        <Component {...pageProps} />
      </GoogleWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
