import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR';
import styles from './styles.module.css';
import { Avatar, Comment } from '../index';


export const Post = ({ author, content, publishedAt }) => {
    
    let contentRead = content.map(line => {
        let {type, content: tmpContent } = line;
        if( type == 'paragraph') return <p key={tmpContent} >{tmpContent}</p>
        else if(type == 'link') return <p key={tmpContent} ><a href="#">{tmpContent}</a></p>
    });

    let dateTitle = format(publishedAt,"d 'de' LLLL 'às' HH'h'mm'min'",{
        locale: ptBr,
    });
    let distanceTime = formatDistanceToNow(publishedAt,{
        locale: ptBr,
        addSuffix: true
    });
    
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    
    let isNewCommentEmpty = newComment.lenght == 0;

    const handleCreateNewComment = () => {
        event.preventDefault();
        setComments([...comments,newComment]);
        setNewComment('');
    }
    
    const handleDeleteComment = (commentDelete) => {
        const filteredComments = comments.filter( comm => comm != commentDelete );
        setComments(filteredComments);
    }

    const handleNewCommentChange = () => {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    const handleNewCommentInvalid = () => {
        event.target.setCustomValidity("Esse campo é obrigatório");
        console.log(event);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={ author.avatarUrl } />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={dateTitle} dateTime={publishedAt.toISOString()}>{distanceTime}</time>
            </header>

            <div className={styles.content}>
                {contentRead}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"  
                    placeholder="Deixe seu comentário"
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                    />

                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment  deleteComment={handleDeleteComment} key={comment} content={comment} />
                })}
            </div>

        </article>
    );
}
