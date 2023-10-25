import type { AppProps } from "next/app";
import MainLayout from "@/components/layout/MainLayout/MainLayout";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import "@/styles/Global.scss";
import "@/styles/Normalize.scss";
import "@/styles/FontSizes.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
