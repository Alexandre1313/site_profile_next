import { Html, Head, Main, NextScript } from 'next/document'
import link from 'next/link'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <link rel="icon" type="image/ico" sizes="32x32"  href="/iconprogramer.ico"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
