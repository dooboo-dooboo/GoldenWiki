import Link from "next/link";

export default function UrlBtn({ href }) {
    
    return (
        <div>
            <Link href={href}>Back</Link>
        </div>
    )
}