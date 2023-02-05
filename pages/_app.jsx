import "react-toastify/dist/ReactToastify.css";
import "vazirmatn/Vazirmatn-font-face.css";
import "styles/globals.css";
import "swiper/css";

import Head from "next/head";
import { Main } from "layouts";
import { Provider } from "react-redux";
import store, { persistor } from "store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>فروشگاه اینترنتی پای‌شاپ</title>
    </Head>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer
          draggable
          rtl={true}
          pauseOnHover
          closeOnClick
          theme="colored"
          autoClose={5000}
          pauseOnFocusLoss
          newestOnTop={true}
          position="bottom-left"
          hideProgressBar={true}
        />
        <Main>
          <Component {...pageProps} />
        </Main>
      </PersistGate>
    </Provider>
  </>
);

export default MyApp;
