import Link from 'next/link'

const openNav = () => document.getElementById("menu-mobile").style.height = "100vh";
const closeNav = () => document.getElementById("menu-mobile").style.height = "0";

const GlobalNav = () => (
    <header className="global-nav">
        <section id="menu-mobile">
            <a href="javascript:void(0)" onClick={closeNav} className="menu-button-change">
                <span>
                    <div className="top"></div>
                    <div className="bot"></div>
                </span>
            </a>
            <nav className="menu">
                <ul>
                    <li><Link href="/ueber"><a>Über</a></Link></li>
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="https://blog.uwe-barthel.net"><a target="_blank">Blog</a></Link></li>
                    <li><Link href="https://l-tec.uwe-barthel.net"><a target="_blank">Survivel</a></Link></li>
                </ul>
            </nav>
            <div className="sitemap">
                <div className="copyright">©2019 Uwe Barthel</div>
                <nav>
                    <Link href="/impressum"><a>Impressum</a></Link>
                    <Link href="/datenschutz"><a>Datenschutz</a></Link>
                </nav>
            </div>
        </section>
        <Link href="/"><a className="logo-uweb">UB</a></Link>
        <a href="javascript:void(0)" onClick={openNav} className="menu-button">
            <span>
                <div className="top"></div>
                <div className="mid"></div>
                <div className="bot"></div>
            </span>
        </a>
    </header>
)

export default GlobalNav