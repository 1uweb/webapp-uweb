import Link from 'next/link'

const openNav = () => document.getElementById("menu-mobile").style.height = "100vh";
const closeNav = () => document.getElementById("menu-mobile").style.height = "0";

const SiteMap = () => (
    <footer className="sitemap">
        <div className="copyright">
            ©2019 Uwe Barthel
        </div>
        <nav>
            <Link href="/impressum"><a>Impressum</a></Link>
            <Link href="/datenschutz"><a>Datenschutz</a></Link>
        </nav>
    </footer>
)

export default SiteMap