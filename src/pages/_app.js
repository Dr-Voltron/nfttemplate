import "@/styles/globals.css";
import { Footer, NavBar } from "../../components/componentsindex";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
