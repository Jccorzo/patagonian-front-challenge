import commentSchema from './comment';
import postSchema from './post';

const mySchema = {
    posts: [postSchema],
    comments: [commentSchema]
}

export default mySchema;