import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import axios from '@/lib/axios';
import { useState } from 'react';



export default function Home() {
  const [wikiTitle, setWikiTitle] = useState('');
  const [wikiContent, setWikiContent] = useState('');

  async function handleCreate(e) {
    e.preventDefault();
    const res = await axios.post('/goldenwiki/', {title: "", content: ""});
    const newWiki = res.data;
    setWikiTitle(newWiki.title);
    setWikiContent(newWiki.content);
  }

  return (
    <>
      <Navbar />
      <Link href="/wiki">All wikis</Link>
    </>
  )
}
