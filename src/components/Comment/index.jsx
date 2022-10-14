import { useState }  from 'react';
import styles from './styles.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from '../';

export const Comment = ({content, deleteComment}) => {
    
    const [likeCount, setLikeCount ] = useState(0);

    const handleDeleteComment = () => {
        deleteComment(content);
    }

    const handleLikeCount = () => {
        setLikeCount((state) => state + 1);
    }

    
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
                        
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
