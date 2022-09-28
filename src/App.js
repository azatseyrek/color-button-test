import {useState} from 'react';
import {getAllByTestId, getByTestId} from '@testing-library/react';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="container">
      <button
        onClick={() => setColor((prev) => (prev === 'red' ? 'blue' : 'red'))}
        style={{
          color: 'white',
          backgroundColor: color,
        }}
      >
        {color === 'red' ? 'change to blue' : 'change to red'}
      </button>

      <button  data-testid="delete-button" className="delete">
        delete
      </button>
    </div>
  );
}

export default App;
