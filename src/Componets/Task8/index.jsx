import React from 'react'
import '../Task8/index.css'
function Task8(props) {
  return (
    <div className='task8__wrapper'>
      <ul>
        <li>{props.home}</li>
        <li>{props.about}</li>
        <li>{props.aloqa}</li>
        <li>{props.yangliklar}</li>
      </ul>
    </div>
  )
}

export default Task8
