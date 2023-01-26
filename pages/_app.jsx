import "vazirmatn/Vazirmatn-font-face.css";
import "styles/globals.css";
import "swiper/css";

import Head from "next/head";
import { Main } from "layouts";
import { Provider } from "react-redux";
import store, { persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Main>{page}</Main>);

  return (
    <>
      <Head>
        <title>فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{getLayout(<Component {...pageProps} />)}</PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
