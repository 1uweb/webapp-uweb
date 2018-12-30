import Link from 'next/link'
import NextHead from 'next/head'
import css from '../main.sass'
import Backend from '../comps/head'
import GlobalNav from '../comps/header';

const Index = () => (
    <div className="page-root">
        <NextHead>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Über | Uwe Barthel</title>
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
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/scrollreveal@4.0.0/dist/scrollreveal.min.js" integrity="sha256-knIjHYN1AFLrQkulibJpReiSxKhUGhIVUhx0GYsIPjM=" crossorigin="anonymous"></script>
            <link href='https://cdn.jsdelivr.net/npm/boxicons@1.8.1/css/boxicons.min.css' rel='stylesheet'></link>
        </NextHead>
        <GlobalNav></GlobalNav>
        <main className="app-root">
            <section className="hero-frontpage">
                <div className="text-about">
                    <div className="wrapper">
                        <h1>Zur Meiner Person</h1>
                        <p>Information & Skills</p>
                    </div>
                </div>
                <span class="bar-wrapper--big"><span class="bar--big-whitespace"><span class="bar--big-line"></span></span></span>
                <div className="bg-about"></div>
            </section>
            <section className="hero-frontpage">
                <div className="text-about">
                    <div className="wrapper">
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421.73 111.62">
                                <g id="2e31e9c0-9f1e-40fa-a374-28eeccd5823b" data-name="Ebene 2">
                                    <g id="f6fbdf54-047f-4933-bac5-9e6ff9780b5a" data-name="schrift-s">
                                        <path d="M44.48,98.62a17.69,17.69,0,0,1-3.86,5.92,15.6,15.6,0,0,1-5.92,4.12A19.57,19.57,0,0,1,27.26,110H0V45.89H24.75a18,18,0,0,1,7,1.35,19.28,19.28,0,0,1,10,9.95A18,18,0,0,1,43,64.27a12.86,12.86,0,0,1-.35,3.14,17.44,17.44,0,0,1-.9,3.41,14.21,14.21,0,0,1-1.7,3.23,14.73,14.73,0,0,1-2.61,2.69,16.78,16.78,0,0,1,6.1,5.83,13.5,13.5,0,0,1,1.62,4,21.32,21.32,0,0,1,.53,4.94A19.82,19.82,0,0,1,44.48,98.62ZM9.6,55.31V73H25.92a9.07,9.07,0,0,0,3.58-.63,8.35,8.35,0,0,0,2.78-2.06,11.13,11.13,0,0,0,1.89-2.87,7.63,7.63,0,0,0,.62-3.23,8.85,8.85,0,0,0-.71-3.4A7,7,0,0,0,32,57.91a12,12,0,0,0-3.22-2,11.44,11.44,0,0,0-4-.62ZM36.32,88.13a8.18,8.18,0,0,0-2.06-2.87,9.63,9.63,0,0,0-3.14-2,10.9,10.9,0,0,0-3.86-.72H9.6V100.5H27.26a10.75,10.75,0,0,0,3.86-.62,10.45,10.45,0,0,0,3.14-2,9.31,9.31,0,0,0,2.06-3,8.86,8.86,0,0,0,.72-3.4A10.93,10.93,0,0,0,36.32,88.13Z" />
                                        <path d="M97.47,95.57c-3.31-.45-7.62-1-12.73-1.43S73.8,92.88,67.07,92.07l-3,7.54c-1.26,3.22-2.7,6.72-4.22,10.4H50.48L76.31,45.8H87L112.81,110h-9.42C100.79,103.55,98.82,98.71,97.47,95.57Zm-3.22-8.25L89,74.05,81.69,55.93,70.21,84.36Z" />
                                        <path d="M170.38,105.08l-2.87,2.69c-1.17,1.07-2.51,2.33-4,3.85-12-12.82-20.08-21.43-24.12-25.64h-8.07v24h-9.51V45.8h26.1a19.92,19.92,0,0,1,7.71,1.44A20.51,20.51,0,0,1,162,51.72a19.69,19.69,0,0,1,4.48,6.55A19.92,19.92,0,0,1,168,66a20.24,20.24,0,0,1-1.08,6.72,21.27,21.27,0,0,1-3.5,6,20.14,20.14,0,0,1-5.11,4.49A18.38,18.38,0,0,1,152,85.62Zm-22.51-28.7a11.86,11.86,0,0,0,4-.72,10.67,10.67,0,0,0,3.41-2.33,9.75,9.75,0,0,0,2.42-3.41,11.86,11.86,0,0,0,.72-4,11.16,11.16,0,0,0-.72-4,9.71,9.71,0,0,0-2.42-3.4A11.61,11.61,0,0,0,152,56.11a10.37,10.37,0,0,0-4.12-.8H131.28V76.38Z" />
                                        <path d="M232.25,55.22H210.37V110h-9.6V55.22H179V45.71h53.27Z" />
                                        <path d="M300.94,45.8V110h-9.51V81.85L254,87V110h-9.51V45.8H254V77.37l37.39-5.12V45.8Z" />
                                        <path d="M361.65,110.1H317.79V45.8h43.86v9.51H327.3V73.15h30v9.6h-30v17.84h34.35Z" />
                                        <path d="M421.73,100.5V110H377V45.8h9.5v54.7Z" />
                                        <path d="M155.87,37.66a12.14,12.14,0,0,1-4.77-3.1,14.2,14.2,0,0,1-3-5,20.18,20.18,0,0,1-1-6.72V.84h5.56v22c0,.79.05,1.58.11,2.26a18.18,18.18,0,0,0,.36,1.89,10.71,10.71,0,0,0,.58,1.52,8,8,0,0,0,.68,1.31,7.71,7.71,0,0,0,1.68,1.78,4.87,4.87,0,0,0,2,1c.74.16,1.47.31,2.15.42a14.16,14.16,0,0,0,2.05.16c.79,0,1.47-.06,2.1-.11a13.11,13.11,0,0,0,1.73-.37,5.06,5.06,0,0,0,1.47-.63,7,7,0,0,0,1.2-.73,5.71,5.71,0,0,0,1.63-1.73,6.79,6.79,0,0,0,.89-2.2c.16-.79.31-1.58.42-2.31a17.66,17.66,0,0,0,.16-2.2V.89h5.55v22a20.13,20.13,0,0,1-1,6.71,13.4,13.4,0,0,1-2.94,5,11.94,11.94,0,0,1-4.82,3.1,17.36,17.36,0,0,1-6.4,1A19.94,19.94,0,0,1,155.87,37.66Z" />
                                        <path d="M236,.89c.79.26,1.47.42,2.05.63L227.66,38.34h-7.18v0L210.41,9.6c-2.26,6.34-4.14,12-5.87,16.78s-3.15,8.76-4.25,12v0h-7.13c-2.31-8.13-4.36-15.32-6.09-21.56s-3.15-11.33-4.35-15.42l5-1.36,9.13,32.46L208.15,1.21h4.67l11.12,31.25C228.5,16.26,231.49,5.4,233,0Z" />
                                        <path d="M270.14,38.39H244.49V.79h25.65V6.35H250.05V16.78h17.57v5.61H250.05V32.83h20.09Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p>Als ich ein zweiwöchiges, schulisches Praktikum bei einer Agentur machte, fiel mir auf, dass mein späterer Beruf einmal Informatiker werden soll. Nach diesem Praktikum begann ich damit Webseiten in HTML & CSS zu schreiben. Daraus ist dann ein Hobby und schlussendlich auch eine Leidenschaft entstanden. Aktuell lerne ich die Programmiersprachen JavaScript - einschließlich React - und PhP. Mein derzeitiger Editor ist VSCode von Microsoft.</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
)

export default Index