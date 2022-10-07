import { useState } from 'react'
import { Post, Header, Sidebar } from './components';
import styles from './App.module.css';
 
export default function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>               
            <Sidebar />
            <main>
                <Post author="Marcelo Q." content="Meu primeiro post" />
                <Post author="Marcelo Q." content="Meu primeiro post" />
            </main>
        </div>
    </div>
  );
}

