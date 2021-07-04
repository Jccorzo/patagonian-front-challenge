import React, { useMemo } from 'react';
import styles from './PostContainer.Module.css';
import Post from '../../component/post/Post';
import Comment from '../../component/comment/Comment';
import NewComment from '../../component/new-comment/NewComment';
import { useSelector } from 'react-redux';

const PostContainer = ({ post }) => {

    const { comments } = useSelector(state => state);

    const commentsList = useMemo(() => post.comments.map((commentId) => {
        const comment = comments.ids[commentId];
        return <Comment key={commentId} comment={comment}/>
    }), [comments])

    return (
        <div className={styles.container} data-testid="post-container">
            <Post userId={post.userId} title={post.title} body={post.body}/>
            <NewComment post={post}/>
            {commentsList}
        </div>
    )
}

export default PostContainer
