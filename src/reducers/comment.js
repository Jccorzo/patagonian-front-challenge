const { GET_COMMENTS, ADD_COMMENT } = require('../actions/index');

const initialComment = {
    ids: {},
    idsAsArray:[]
};

const commentReducer = (state = initialComment, { type, comments, array, comment }) => {
    switch (type) {
        case GET_COMMENTS:
            return {
                ...state,
                ids: comments,
                idsAsArray: array
            };
        case ADD_COMMENT: 
            return {
                ...state,
                ids: {
                    ...state.ids,
                    [comment.id]: comment
                },
                idsAsArray: [...state.idsAsArray, comment.id]
            };
        default: return state;
    }
};

export default commentReducer;