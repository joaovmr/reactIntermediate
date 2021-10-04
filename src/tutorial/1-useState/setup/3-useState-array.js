import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people,setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id) 
    // save only the ids that are not the one we are searching
    setPeople(newPeople) // set the array as the new one
  }

  return( 
  <>
  {
    people.map((person) => {
      const {id,name} = person
      return <div key = {id} className = 'item'>
        <h4>{name}</h4>
        <button className = 'btn' onClick = {() => removeItem(id)}>
          Remove
        </button>
      </div>
    })
  }
    <button className = 'btn' onClick = {() => setPeople([])}>
      Clear itens
      </button>
  </>
  )
};

export default UseStateArray;
