import {useEffect, useRef, useState} from 'react';
import {getAllByTestId, getByTestId} from '@testing-library/react';

function App() {
  const [color, setColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

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
          backgroundColor: color,
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
