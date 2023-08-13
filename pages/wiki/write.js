import WikiForm from "@/components/NewWikiForm";
import axios from "@/lib/axios";
import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";
import { useRouter } from "next/router";

export async function getServerSideProps() {
    await dbConnect();
    const wikis = await GoldenWiki.find();
    return {
        props: {
            wikis: JSON.parse(JSON.stringify(wikis)),
        }
    }
}

export default function WikiCreatePage(wikis) {
    const router = useRouter();
    async function handleSubmit(values) {
        
        await axios.post('/goldenwiki/', values);
        router.push('/wiki/');
    }

    return (
        <>
            <h1>New Wiki</h1>
            <WikiForm onSubmit={handleSubmit} wikis={wikis} />
        </>
    )
}