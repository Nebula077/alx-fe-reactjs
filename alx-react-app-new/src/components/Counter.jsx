import React from 'react'
import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter