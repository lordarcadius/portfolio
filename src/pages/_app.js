import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Vipul Jha</title>
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 