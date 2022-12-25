import { render, screen } from '@testing-library/react';
import App from './App';

test('renders elm tree farm', () => {
  render(<App />);
  const linkElement = screen.getByText(/Elm tree farm/i);
  expect(linkElement).toBeInTheDocument();
});
