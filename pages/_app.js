import "../styles/index.css";
import { Windmill } from "@windmill/react-ui";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Windmill>
        <Component {...pageProps} />
      </Windmill>
    </ThemeProvider>
  );
}

export default MyApp;
