import { GET_POSTS, UPDATE_POST } from './index';

export const getPosts = (posts, array) => ({ type: GET_POSTS, posts, array })
export const updatePost = (postId, comment) => ({ type: UPDATE_POST, postId, comment })

