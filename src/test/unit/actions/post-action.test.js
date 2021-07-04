import { updatePost, getPosts } from '../../../actions/post';
import configureMockStore from 'redux-mock-store';
import { UPDATE_POST, GET_POSTS } from '../../../actions';

const mockStore = configureMockStore([])

test('store should get action updatePost', () => {
    const store = mockStore({});
    const expectedActions = [
        { type: UPDATE_POST, comment: 1, postId: 1 }
    ];
    store.dispatch(updatePost(1,1));
    expect(store.getActions()).toEqual(expectedActions);
})

test('store should get action getPosts', () => {
    const store = mockStore({});
    const posts = {
        1: {
            id: 1,
            title: 'title',
            body: 'body',
            comments: []
        }
    }
    const array = [1];
    const expectedActions = [
        { type: GET_POSTS, posts, array }
    ];
    store.dispatch(getPosts(posts,array));
    expect(store.getActions()).toEqual(expectedActions);
})
