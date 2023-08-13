import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import WikiButton from "@/components/Wiki";
import dbConnect from "@/db/dbConnect";
import GoldenWiki from "@/db/models/GoldenWiki";
import { useState } from "react";

export async function getServerSideProps() {
    await dbConnect();
    const wikis = await GoldenWiki.find();
    return {
        props: {
            wikis: JSON.parse(JSON.stringify(wikis)),
        }
    }
}

export default function Search(wikis) {
    const [searchData, setSearchData] = useState('');
    return (
        <>
            <Navbar />
            <Searchbar setSearchData={setSearchData}/>
            {searchData || 
                <ul>
                    {wikis.wikis.map((wiki) => (
                        <li key={wiki.id}>
                            <WikiButton title={wiki.title} />
                        </li>
                    ))}
                </ul>
            }
            {
                searchData != ""
                ? 
                <ul>
                    {wikis.wikis.map((wiki) => (
                        (wiki.title.indexOf(searchData) != -1)
                        ? <li key={wiki.id}>
                            <WikiButton title={wiki.title} />
                        </li>
                        : null
                        
                    ))}
                </ul>
                : null
            }
        </>
    )
}