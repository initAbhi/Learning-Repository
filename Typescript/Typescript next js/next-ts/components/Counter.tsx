"use client"
import React, { useState } from 'react'

interface CounterInterface {
    counter: number
}

const Counter = () => {
    const [count, setCount] = useState<number | undefined>(0)
    

  return (
    <div>
      Counter
      <p>{count}</p>
      <button onClick={() => {
        if(typeof count == "number")
        setCount(count + 1)
      }}>Add</button>
    </div>
  )
}

export default Counter
