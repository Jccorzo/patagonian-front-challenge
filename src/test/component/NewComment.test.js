import { render, screen } from '@testing-library/react';
import NewComment from '../../component/new-comment/NewComment';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([])

test('render NewComment', () => {
  const post = { id: 1 };
  const store = mockStore({ comments: { idsAsArray: [1]}});
  render( <Provider store={store}><NewComment post={post}/> </Provider>);
  const button = screen.getByText(/Comment/i);
  expect(button).toBeInTheDocument();
}); 

