import { render, screen } from '@testing-library/react';
import App from './App';

test('basketball', () => {
  render(<App />);
  const linkElement = screen.getByText(/basketball/i);
  expect(linkElement).toBeInTheDocument();
});
