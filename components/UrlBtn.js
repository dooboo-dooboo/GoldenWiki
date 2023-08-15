import Link from "next/link";

export default function UrlBtn({ href }) {
    
    return (
        <div>
            <button>
                <Link href={href} className="none-deco">Back</Link>
            </button>
        </div>
    )
}