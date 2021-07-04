import { UPDATE_POST, GET_POSTS } from '../../../actions';
import postReducer from '../../../reducers/post';

test('should return initial posts state', ()=> {
    expect(postReducer(undefined,{ type: 'default' })).toEqual({
        ids: {},
        idsAsArray: []
    })
})

test('should return posts and its ids as array', ()=> {
    const posts = {
        1: {
            id: 1,
            title: 'title',
            body: 'body',
            comments: []
        }
    }
    expect(postReducer(undefined,{ type: GET_POSTS, posts: posts, array: [1] })).toEqual({
        ids: posts,
        idsAsArray: [1]
    })
})

test('should add comment to post', ()=> {
    const initialState = {
        ids: {
            1: {
                id: 1,
                title: 'title',
                body: 'body',
                comments: []
            }
        },
        idsAsArray: [1]
    }
    expect(postReducer(initialState,{ type: UPDATE_POST, postId: 1, comment: 1 })).toEqual({
        ids: {
            1: {
                id: 1,
                title: 'title',
                body: 'body',
                comments: [1]
            }
        },
        idsAsArray: [1]
    })
})