import { ADD_COMMENT, GET_COMMENTS } from './index';

export const getComments= (comments, array) => ({ type: GET_COMMENTS, comments, array })
export const addComment = (comment) => ({ type: ADD_COMMENT, comment })