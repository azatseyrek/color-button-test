import {fireEvent, render, screen} from '@testing-library/react';
import App, {replaceStringWithCamelCase} from './App';

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

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const buttonElement = screen.getByRole('button', {name: /change to blue/i});
  const deleteButtonElement = screen.getByTestId('delete-button');
  expect(buttonElement && deleteButtonElement).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).not.toBeChecked();

  // check when checkbox clicked, button is disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement && deleteButtonElement).toBeDisabled();
});

test('find the checkbox lable', () => {
  render(<App />);
  const checkBoxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });
  expect(checkBoxElement).toBeInTheDocument();
});

test('check the buttons styles when checkbox is enabled or diosabled', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: /change to blue/i});
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({'background-color': 'red'});
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({'background-color': 'grey'});
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceStringWithCamelCase('Red')).toBe('red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceStringWithCamelCase('MidnightBlue')).toBe('midnightBlue');
  });
  test('works for multiple inner capital letters', () => {
    expect(replaceStringWithCamelCase('Medium Violet Red')).toBe(
      'mediumVioletRed',
    );
  });
});
