import Link from "next/link";

export default function WikiButton({ title }) {
    
    return (
        <div className="bg_green">
            <Link href={`/wiki/${title}`}>
                <h1 className="white">{title}</h1>
            </Link>
        </div>
    )
}