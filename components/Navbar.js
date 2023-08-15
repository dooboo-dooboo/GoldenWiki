import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className="bg_green">
            <ul className="noneStyle">
                <li>
                    <img src="/GoldenWikiLogo.png" width={300} height={125} />
                </li>
                <li className="inline navLink">
                    <Link href="/" className="white h2 inline none-deco">Home</Link>
                </li>
                <li className="inline navLink">
                    <Link href="/searchWiki" className="white h2 inline none-deco">Search</Link>
                </li>
                <li className="inline navLink">
                    <Link href="/wiki/write" className="white h2 inline none-deco">Write</Link>
                </li>
            </ul>
        </div>
    )
}