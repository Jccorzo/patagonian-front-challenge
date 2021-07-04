import { schema } from 'normalizr';

const postSchema = new schema.Entity('posts',
{},
{
    processStrategy: (value, parent, key) => {
        const comments = parent.comments.filter(comment => comment.postId === value.id).map(comment => comment.id);
      return { ...value, comments: comments };
    },
  }
);

export default postSchema;