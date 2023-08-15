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
                <ul className="contents-container">
                    {wikis.wikis.map((wiki) => (
                        <li key={wiki.id} className="contents bg_green">
                            <WikiButton title={wiki.title} className="contents-button" />
                        </li>
                    ))}
                </ul>
            }
            {
                searchData != ""
                ? 
                <ul className="contents-container">
                    {wikis.wikis.map((wiki) => (
                        (wiki.title.indexOf(searchData) != -1)
                        ? <li key={wiki.id} className="contents bg_green">
                            <WikiButton title={wiki.title} className="contents-button" />
                        </li>
                        : null
                        
                    ))}
                </ul>
                : null
            }
        </>
    )
}