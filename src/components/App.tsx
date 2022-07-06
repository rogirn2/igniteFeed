import { Post } from "./Post";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

import styles from '../css/App.module.css';

import '../global.css';

const posts =[
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/rogirn2.png',
      name: 'Igor Alves',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-25 18:10:00'),
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/batistatiago.png',
      name: 'Tiago Batista',
      role: 'Senior Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-27 18:10:00'),
  }
];

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content as Content[]}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

