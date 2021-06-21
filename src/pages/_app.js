import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Vipul Jha</title>
          <meta name="title" content="Vipul Jha - Co-founder, Hexoncode" />
          <meta name="description" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." />
          <meta itemprop="image" content="https://www.vipuljha.com/images/banner.jpg"/>

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.vipuljha.com/" />
          <meta property="twitter:title" content="Vipul Jha - Co-founder, Hexoncode" />
          <meta property="twitter:description" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." />
          <meta property="twitter:image" content="https://www.vipuljha.com/images/banner.jpg" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.vipuljha.com" />
          <meta property="og:title" content="Vipul Jha - Co-founder, Hexoncode" />
          <meta property="og:description" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." />
          <meta property="og:image" content="https://www.vipuljha.com/images/banner.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
    </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 