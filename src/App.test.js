import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/earn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn  link', () => {
  render(<App />);
  const linkElement = screen.getByText(/earn react/i);
  expect(linkElement).toBeInTheDocument();
});
