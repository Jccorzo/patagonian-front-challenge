import { GET_COMMENTS, ADD_COMMENT } from '../../../actions';
import comentReducer from '../../../reducers/comment';

const comments = {
    1: {
        id: 1,
        postId: 1,
        email: 'test@email.com',
        name: 'Bob',
        body: 'body',
    }
}
test('should return initial comments state', ()=> {
    expect(comentReducer(undefined,{ type: 'default' })).toEqual({
        ids: {},
        idsAsArray: []
    })
})

test('should return comments and its ids as array', ()=> {
    
    expect(comentReducer(undefined,{ type: GET_COMMENTS, comments, array: [1] })).toEqual({
        ids: comments,
        idsAsArray: [1]
    })
})

test('should add comment', ()=> {
    const comment = {
        id: 1,
        postId: 1,
        email: 'test@email.com',
        name: 'Bob',
        body: 'body',
    }
    expect(comentReducer(undefined,{ type: ADD_COMMENT, comment  })).toEqual({
        ids: comments,
        idsAsArray: [1]
    })
})