import { useEffect } from "react";
import AOS from "aos";

import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/Product.css";
import "../styles/Shop.css";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
