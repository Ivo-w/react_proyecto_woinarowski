import React, { useState } from 'react';

function ItemCount() {

  const [count, setCount] = useState(0);
  const stock = count < 5
  

  
  return (
    <div>
      <p>Cantidad de clicks: {count}</p>
      <button onClick={ () => setCount(count + 1 ) }>
        Incremento
      </button>
      <button onClick={() => setCount (count - 1)}>
      Decremento
      </button>
    </div>
  );
}

export default ItemCount;

