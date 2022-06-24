import styles from '../css/Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/rogirn2.png" />
                    <div className={styles.authorInfo}>
                        <strong>Igor Alves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='23 de Junho às 21h20' dateTime='2022-06-23 21:20:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
            </div>
        </article>
    );
}