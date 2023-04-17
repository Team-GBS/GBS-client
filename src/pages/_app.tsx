import '../styles/globals.tsx';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import '../../public/fonts/style.css';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer />
      </RecoilRoot>
    </>
  );
}
