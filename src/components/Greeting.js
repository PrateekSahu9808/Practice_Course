import React, { useState } from 'react'
import Output from './Output'

const Greeting = () => {
  const [changedText,setChangedText]=useState(false)
  const changeTextHandler=()=>{
   setChangedText(true)
  }
  return (
    <div>
        <h2>Hello World</h2>
       
        {!changedText &&<Output><p >It's good to see you</p> </Output>}
        {changedText &&<Output> <p >changed!!</p></Output>}
        <button onClick={changeTextHandler}>
          change Text!!!
        </button>
    </div>
  )
}

export default Greeting