import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className="bg_green">
            <ul className="noneStyle">
                <li>
                    <p className="white h1">GoldenWiki</p>
                </li>
                <li className="inline navLink">
                    <Link href="/" className="white h2 inline">Home</Link>
                </li>
                <li className="inline navLink">
                    <Link href="/searchWiki" className="white h2 inline">Search</Link>
                </li>
                <li className="inline navLink">
                    <Link href="/wiki/write" className="white h2 inline">Write</Link>
                </li>
            </ul>
        </div>
    )
}