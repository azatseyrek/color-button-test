import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

// test('renders  Hello World text', () => {
//   render(<App />);
//   const textElement = screen.getByText(/Hello World/i);
//   expect(textElement).toBeInTheDocument();
// });

// test('render link element', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', {name: /learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correcet initial color', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {
    name: /change to blue/i,
  });
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'});
});

test('button has correct initial text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: /change to blue/i});
  expect(buttonElement).toHaveTextContent('change to blue');
});

test('button turns blue when clicked', () => {
  render(<App />);
  const buttonEllement = screen.getByRole('button', {name: /change to blue/i});
  fireEvent.click(buttonEllement);
  expect(buttonEllement).toHaveStyle({backgroundColor: 'blue'});
});

test('delete button text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('delete-button');
  expect(buttonElement).toHaveTextContent('delete'); //bunu yada asagidaki gibi de yapabiliriz.
  const buttonText = buttonElement.textContent;
  expect(buttonText).toBe('delete');
});
