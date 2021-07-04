const { GET_POSTS, UPDATE_POST } = require('../actions/index');
const initialPost = {
    ids: {},
    idsAsArray:[]
};

const postReducer = (state = initialPost, { type , posts, array, postId, comment }) => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                ids: posts,
                idsAsArray: array
            };
        case UPDATE_POST: 
            return {
                ...state,
                ids: {
                    ...state.ids,
                    [postId]: {
                        ...state.ids[postId],
                        comments: [...state.ids[postId].comments, comment]
                    }
                }
            };
        default: return state
    };
};

export default postReducer;