import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta name="Vipul Jha" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." />

          {/* Twitter */}
          <meta name="twitter:card" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." key="twcard" />
          <meta name="twitter:creator" content="lordarcadius" key="twhandle" />

          {/* Open Graph */}
          <meta property="og:url" content="https://www.vipuljha.com" key="ogurl" />
          <meta property="og:image" content="/images/banner.jpg" key="ogimage" />
          <meta property="og:site_name" content="Vipul Jha" key="ogsitename" />
          <meta property="og:title" content="Vipul Jha" key="ogtitle" />
          <meta property="og:description" content="Hey there, This is Vipul Jha. I am the co-founder of Hexoncode. I develop Apps, Kernels, ROMs, and Scripts." key="ogdesc" />

          <title>Vipul Jha</title>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}