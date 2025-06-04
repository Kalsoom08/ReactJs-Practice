import { useState } from "react";
import FibonacciCalculator from '../src/Component/FabComponent';

function App() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <FibonacciCalculator n={number} />
    </div>
  );
}

export default App