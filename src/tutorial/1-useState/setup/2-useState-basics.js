import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Hello World'))
  // const value  = useState(1)[0]
  // const handler  = useState(1)[1]
  // console.log(value,handler)

  const [text,setText] = useState('Random Title')// default value for variable text
  
  const handleClick = () => {

    if(text === 'Random Title'){
      setText('Hello World') // Whatever pass here change the text 
    }else{
      setText('Random Title')
    }
  }
  
  return ( 
  <React.Fragment>
    <h1>{text}</h1>
    <button className = 'btn' onClick = {handleClick}>
      Change Title
    </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
 