import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import styles from './css/App.module.css';

import './global.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Igor Alves"
            content="Esse é o meu post" 
          />
          <Post 
            author="Igor Brito"
            content="Esse é outro post" 
          />
        </main>
      </div>
    </>
  )
}

