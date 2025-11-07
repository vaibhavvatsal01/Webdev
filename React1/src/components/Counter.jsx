import React, { useState } from 'react'
import { use } from 'react'
function count1(){
    const[count,setcount]=useState(0)
    function increment(){
        setcount(count+1)

    }
}
function Counter() {
  return (
    <div>
    <button onClick={increment}>+</button>\
    <span>{count}</span>
    <button>-</button>

    </div>
  )
}

export default Counter