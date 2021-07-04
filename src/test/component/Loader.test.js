import { render, screen } from '@testing-library/react';
import Loader from '../../component/loader/Loader';

test('render loader', () => {
  render( <Loader /> );
  const loader = screen.queryByTestId('loader');
  expect(loader).toBeInTheDocument();
}); 

