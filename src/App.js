import {useEffect, useRef, useState} from 'react';
import {getAllByTestId, getByTestId} from '@testing-library/react';

export const replaceStringWithCamelCase = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
};

function App() {
  const [color, setColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  const test = replaceStringWithCamelCase('Azat Seyrek Miran Seyrek');

  console.log(test);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  return (
    <div className="container">
      <button
        disabled={isChecked}
        onClick={() => setColor((prev) => (prev === 'red' ? 'blue' : 'red'))}
        style={{
          color: 'white',
          backgroundColor: isChecked ? 'grey' : color,
        }}
      >
        {color === 'red' ? 'change to blue' : 'change to red'}
      </button>

      <button
        disabled={isChecked}
        data-testid="delete-button"
        className="delete"
      >
        delete
      </button>
      <label htmlFor="disable-button-checkbox" name="checkbox">
        Disable Button
      </label>
      <input
        id="disable-button-checkbox"
        className="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        // aria-checked={isChecked}
      />
    </div>
  );
}

export default App;
