import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html lang='es'>
        <Head>
            <title>Event Date</title>
            <meta name='description' content='Event Date | Plataforma para buscar y publicar eventos'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}