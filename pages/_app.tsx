import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}
