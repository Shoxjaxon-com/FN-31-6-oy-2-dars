import React from 'react'
import '../Task1/index.css'
function Task (props) {
  return (
    <div>
      <div className="launges__wrapper">
            <h2>1-Topshiriq</h2>
            <p>eng : {props.eng}</p>
            <p>uzb: {props.uzb}</p>
            <p>rus: {props.rus}</p>
            <p>yapon : {props.yapon}</p>
      </div>
    </div>
  )
}

export default Task
