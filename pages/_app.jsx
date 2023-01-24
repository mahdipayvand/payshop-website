import "vazirmatn/Vazirmatn-font-face.css";
import "styles/globals.css";
import "swiper/css";

import Head from "next/head";
import { Main } from "layouts";

const MyApp = ({ Component, ...pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Main>{page}</Main>);

  return (
    <>
      <Head>
        <title>فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
