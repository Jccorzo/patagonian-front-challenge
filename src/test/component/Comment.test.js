import { render, screen } from '@testing-library/react';
import Comment from '../../component/comment/Comment';

test('render comment', () => {
  const comment = { name: 'Bob', email: 'test@mail.com', body: 'body test'}
  render(<Comment comment={comment} /> );
  const name = screen.getByText(/Bob/i);
  const email = screen.getByText(/(test@mail.com)/i);
  const body = screen.getByText(/body test/i);

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(body).toBeInTheDocument();
}); 

