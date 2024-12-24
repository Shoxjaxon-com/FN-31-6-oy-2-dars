import React from 'react'
import '../Task4/index.css'
function Task4(props) {
    
  return (
    <div className='task__wrapper'>
      <ul>
        <li>{props.name1}</li>
        <li>{props.name2}</li>
        <li>{props.name3}</li>
        <li>{props.name4}</li>
        <li>{props.name5}</li>
        <li>{props.name6}</li>
        <li>{props.name7}</li>
      </ul>
    </div>
  )
}

export default Task4
