import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text,setText] = useState('a')
  const [isError,setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* // if text empty display lorem */}
      <h1>{text || 'Lorem ipsum'}</h1>
      <button className = 'btn' onClick = {() => setIsError(!isError)}>toggle error</button>
      {/* if text has something display hello world  */}
      {isError && <h1>ERROR</h1>}
      {isError ? <p>there is an error</p> : <div>
        <h2>there is no error</h2>
        </div>}  
    </>  
  );
};

export default ShortCircuit;
