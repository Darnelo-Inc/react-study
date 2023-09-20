import React from "react"

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default Counter
