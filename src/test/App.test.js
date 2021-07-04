import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { store } from '../store';
import { getPosts } from '../actions/post';

const mockStore = configureMockStore([])

test('render loader', () => {
  const store = mockStore({ posts: { idsAsArray: []}})
  render( <Provider store={store}><App /></Provider> );
  const loader = screen.queryByTestId('loader');
  expect(loader).toBeInTheDocument();
});

test('render PostContainer', () => {
  const store = mockStore(
    { posts: 
      { ids: 
        { 1: 
          {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            comments: [1]
          }
        }, 
        idsAsArray: [1]
      },
      comments: {
        ids: {
          1: {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          }
        },
        idsAsArray: [1]
      }
    }
    )
  render( <Provider store={store}><App /></Provider> );
  const postContainer = screen.queryByTestId('post-container');
  expect(postContainer).toBeInTheDocument();
});

test('render new comment', () => {
  const post = { id: 1, comments: [], body: 'Body', title: 'Title' };
  store.dispatch(getPosts({1:post},[1]))
  render( <Provider store={store}><App /> </Provider>);

   fireEvent.change(screen.queryByPlaceholderText(/email/i), {
        target: { value: 'test@mail.com' }
    });
    fireEvent.change(screen.queryByPlaceholderText(/name/i), {
        target: { value: 'Bob' }
    });
    fireEvent.change(screen.queryByPlaceholderText(/Add comment/i), {
        target: { value: 'test body' }
    });
    fireEvent.click(screen.getByText(/Comment/i));
    const comment = screen.getByText(/test body/i);
    const name = screen.getByText(/Bob/i);
    const email = screen.getByText(/test@mail.com/i)
    expect(comment).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }); 