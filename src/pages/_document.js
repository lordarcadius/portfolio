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
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Vipul Jha - Android Developer" />
          <meta name="description" content="Vipul Jha, also known as lordarcadius is an Android Engineer at Primebook. He has also worked on ROMs, Kernels and Scripts." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Vipul Jha - Android Developer" />
          <meta property="og:description" content="Vipul Jha, also known as lordarcadius is an Android Engineer at Primebook. He has also worked on ROMs, Kernels and Scripts." />
          <meta property="og:image" content="https://www.vipuljha.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Vipul Jha - Android Developer" />
          <meta property="twitter:description" content="Vipul Jha, also known as lordarcadius is an Android Engineer at Primebook. He has also worked on ROMs, Kernels and Scripts." />
          <meta property="twitter:image" content="https://www.vipuljha.com/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
