import "vazirmatn/Vazirmatn-font-face.css";
import "styles/globals.css";
import "swiper/css";

import Head from "next/head";

const MyApp = ({ Component, ...pageProps }) => (
  <>
    <Head>
      <title>فروشگاه اینترنتی پای‌شاپ</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
