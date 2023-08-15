import Link from "next/link";

export default function WikiButton({ title }) {
    
    return (
        <div>
            <Link href={`/wiki/${title}`} className="none-deco">
                <h1 className="white">{title}</h1>
            </Link>
        </div>
    )
}