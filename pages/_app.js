import "../styles/index.css";
import { Windmill } from "@windmill/react-ui";

function MyApp({ Component, pageProps }) {
  return (
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
  );
}

export default MyApp;
