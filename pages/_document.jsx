import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="bg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Clear & Shine – професионално пране, гладене и химическо чистене за хотели, ресторанти и домакинства. Взимане и доставка до врата." />
        <meta name="theme-color" content="#1E3FAE" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
