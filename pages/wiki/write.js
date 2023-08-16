import WikiForm from "@/components/NewWikiForm";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import UrlBtn from "@/components/UrlBtn";
import Navbar from "@/components/Navbar";
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

export default function WikiCreatePage({ wikis }) {
    const router = useRouter();
    async function handleSubmit(values) {
        
        await axios.post('/goldenwiki/', values);
        router.push('/searchWiki/');
    }

    return (
        <>
            <Navbar />
            <UrlBtn href={'/'} />
            <h1 className="middle-x">New Wiki</h1>
            <WikiForm onSubmit={handleSubmit} wikis={wikis} />
        </>
    )
}