import React from 'react'

const TodoItem = ({text, id, checked}) => {

  return (
      <div onClick={()=>checked(id)}>
          <li>{text}</li>
      </div>
  )
}

export default TodoItem;