import Link from 'next/link'
import NextHead from 'next/head'
import css from '../main.sass'
import Backend from '../comps/head'

const Index = () => (
    <div className="page-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <title>Impressum | Uwe Barthel</title>
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-128.png" sizes="128x128" />
            <meta name="msapplication-TileColor" content="#D6D6D6" />
            <meta name="msapplication-TileImage" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-310x310.png" />
        </NextHead>
        <main className="app-root"></main>
    </div>
)

export default Index