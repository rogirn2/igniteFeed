import { Post } from "./Post";
import './global.css';
import { Header } from "./components/Header";

import styles from './css/App.module.css';
import { Sidebar } from "./components/Sidebar";

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

