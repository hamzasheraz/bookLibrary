import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
