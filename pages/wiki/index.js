import Navbar from "@/components/Navbar";
import WikiButton from "@/components/Wiki";
import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";

export async function getServerSideProps() {
    await dbConnect();
    const wikis = await GoldenWiki.find();
    return {
        props: {
            wikis: JSON.parse(JSON.stringify(wikis)),
        }
    }
}

export default function WikiPage({ wikis }) {
    return (
        <>
            <Navbar />
            <ul>
                {wikis.map((wiki) => (
                    <li key={wiki.id}>
                        <WikiButton title={wiki.title} />
                    </li>
                ))}
            </ul>
        </>
    )
}