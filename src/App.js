import './App.css';

import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from './actions/post'
import { getComments } from './actions/comment';
import { getCommentsApi } from './api/comment';
import PostContainer from './container/post-container/PostContainer';
 
import { normalize } from 'normalizr';
import { getPostsApi } from './api/post';
import mySchema from './schemas';
import Loader from './component/loader/Loader';

function App() {

  const {posts}  = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    async function chargePostWithComments (){
      try {
        const [comments, posts] = await Promise.all([getCommentsApi(),getPostsApi()]);
        const { entities: { comments: commentEntity, posts: postEntity }, result: {comments: commentIds, posts: postIds }} = normalize({comments, posts}, mySchema);
        dispatch(getComments(commentEntity, commentIds))
        dispatch(getPosts(postEntity, postIds))
      } catch (e) {
        console.log('Error: ', e);
        alert('Something went wrong loading posts')
      }
    }
    chargePostWithComments();
  },[])

  const postsList = useMemo(() => posts.idsAsArray.map((id) => {
    const post = posts.ids[id];
    return <PostContainer key={id} post={post} />
  }),[posts])

  return (
    <div className="App">
      {!!posts.idsAsArray.length ? postsList : <Loader/>}
    </div> 
  );
}

export default App;
