import "vazirmatn/Vazirmatn-font-face.css";
import "styles/globals.css";
import "swiper/css";

import store from "store";
import Head from "next/head";
import { Main } from "layouts";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Main>{page}</Main>);

  return (
    <>
      <Head>
        <title>فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </>
  );
};

export default MyApp;
