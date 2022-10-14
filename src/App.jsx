  
import { useState } from 'react'
import { Post, Header, Sidebar } from './components';
import styles from './App.module.css';

import { postsList } from './utils/posts';

export default function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>               
            <Sidebar />
            <main>
                {postsList.map( post => <Post key={post.id}  author={post.author} content={post.content} publishedAt={post.publishedAt }/> )}
            </main>
        </div>
    </div>
  );
}

