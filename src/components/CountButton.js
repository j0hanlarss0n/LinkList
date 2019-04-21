import React, { useState } from 'react';

function CountButton() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(40);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default CountButton