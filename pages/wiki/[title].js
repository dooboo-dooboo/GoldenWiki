import WikiButton from "@/components/Wiki";
import WikiContent from "@/components/WikiContent";
import { useRouter } from "next/router";
import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";
import WikiForm, { WikiFormType } from "@/components/NewWikiForm";
import axios from "@/lib/axios";
import UrlBtn from "@/components/UrlBtn";
import Navbar from "@/components/Navbar";

export async function getServerSideProps(context) {
    const { title } = context.query;
    await dbConnect();
    const wikis = await GoldenWiki.findOne({ title: title });
    if (wikis) {
        return {
            props: {
                wikis: JSON.parse(JSON.stringify(wikis)),
            }
        }
    }

    return {
        notFound: true,
    }
    
}

export default function WikiTitle({ wikis }) {
    const router = useRouter();
    const { title } = router.query;

    async function handleSubmit(values) {
        await axios.patch(`/goldenwiki/${wikis._id}`, values);
        router.push('/searchWiki');
    }
    return (
        <>
            <Navbar />
            <UrlBtn href={'/searchWiki'} />
            <WikiContent title={wikis.title} content={wikis.content}/>
            
            <div className="patch">
                <h2 className="middle-x">Patch</h2>
                <WikiForm type={WikiFormType.Edit} initialValues={{
                    title: title,
                    content: wikis.content,
                }} onSubmit={handleSubmit} wikis={wikis} />
            </div>
        </>
    )
}