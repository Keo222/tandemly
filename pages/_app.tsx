import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  return (
    <Wrapper
      apiKey={apiKey as string}
      libraries={["places"]}
      render={render}
    >
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
