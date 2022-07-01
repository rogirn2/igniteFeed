import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from '../css/Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState('');
    
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        document.querySelector(".btn").blur();
        setNewCommentText('');
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.id}>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p key={line.id}><a href={line.content}>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment' 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={event => handleNewCommentChange(event)}
                    onInvalid={event => handleNewCommentInvalid(event)}
                    required
                />

                <footer>
                    <button 
                        className='btn' 
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}