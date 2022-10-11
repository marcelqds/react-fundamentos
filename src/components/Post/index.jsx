import styles from './styles.module.css';
import { Avatar, Comment } from '../index';

export const Post = (props) => {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/marcelqds.png" />
                    <div className={styles.authorInfo}>
                        <strong>Marcelo Queiroz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 de Outobro às 10:00" dateTime="2022-10-10">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>Acabei de subir</p>
                <p> <a href="#">jane.design/doctorcare</a> </p>
                <p>
                    <a href="#">#novoprojeto</a>&nbsp;
                    <a href="#">#nlw</a>&nbsp;
                    <a href="#">#rocketseat</a>&nbsp;
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe seu comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    );
}
