import styles from './styles.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from '../';

export const Comment = () => {
    return(
        <div className={styles.comment}>
            {/*<img className={styles.avatar} src="https://github.com/marcelqds.png" />*/}
            <Avatar src="https://github.com/marcelqds.png" hasBorder={false} />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Queiroz</strong>
                            <time title="10 de Outrubro às 10h40min" dateTime="2022-10-10 10:40:13">Cerca de 1h atrás</time>
                        </div>
                        
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Tchelo, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
