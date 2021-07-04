import React from 'react';
import styles from './Post.Module.css'

const Post = ({title, body}) => {
    return(
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Post
