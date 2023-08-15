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
      <h1 className='middle-x'>GoldenPaper가 만든 위키</h1>
      <br />
      <h2 className='middle-x'>다른 사람에게 정보를 주기 위해 새로운 위키를 만드세요!</h2>
      <h2 className='middle-x'>다른 사람들이 공개한 점보를 얻고 수정하세요!</h2>
    </>
  )
}
