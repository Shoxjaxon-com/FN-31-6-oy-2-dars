import React from 'react'
import '../Task2/index.css'
function Task2(props) {
  return (
    <div className='animal'>
      <div className="animal__wrapper">
        <img src={props.images} alt="" />
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

export default Task2
