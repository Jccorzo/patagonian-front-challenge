import { render, screen } from '@testing-library/react';
import PostContainer from '../../container/post-container/PostContainer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([])

test('render PostContainer', () => {
  const post = { id: 1, comments: [], body: 'Body', title: 'Title' };
  const store = mockStore({ comments: { ids: {},idsAsArray: []}});
  render( <Provider store={store}><PostContainer post={post}/> </Provider>);
  const title = screen.getByText(/Title/i);
  const body = screen.getByText(/Body/i);
  const button = screen.getByText(/Comment/i);

  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  expect(button).toBeInTheDocument();
}); 


