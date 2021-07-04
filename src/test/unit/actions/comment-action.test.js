import { addComment, getComments } from '../../../actions/comment';
import configureMockStore from 'redux-mock-store';
import { ADD_COMMENT, GET_COMMENTS } from '../../../actions';

const mockStore = configureMockStore([])

test('store should get action addComment', () => {
    const store = mockStore({});
    const comment = {
        id: 1,
        postId: 1,
        body: 'body',
        name: 'name',
        email: 'email'
    };
    const expectedActions = [
        { type: ADD_COMMENT, comment }
    ];
    store.dispatch(addComment(comment));
    expect(store.getActions()).toEqual(expectedActions);
})

test('store should get action getComments', () => {
    const store = mockStore({});
    const comments = {
        1: {
            id: 1,
            postId: 1,
            email: 'test@email.com',
            name: 'Bob',
            body: 'body',
        }
    }
    const array = [1];
    const expectedActions = [
        { type: GET_COMMENTS, comments, array }
    ];
    store.dispatch(getComments(comments,array));
    expect(store.getActions()).toEqual(expectedActions);
})