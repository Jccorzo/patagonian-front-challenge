import React from 'react';
import styles from './Comment.Module.css'

const Comment = ({comment}) => {
    return(
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <p className={styles.name}>{comment.name}</p>
                <p className={styles.email}>({comment.email})</p>
            </div>
            <p>{comment.body}</p>
        </div>
    );
}

export default Comment
