import { render, screen } from '@testing-library/react';
import Post from '../../component/post/Post';

test('render Post', () => {
  render(<Post title={'Title'} body={'Body'} /> );
  const title = screen.getByText(/Title/i);
  const body = screen.getByText(/Body/i);

  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
}); 

