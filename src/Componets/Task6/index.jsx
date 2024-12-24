import React from 'react'
import '../Task6/index.css'
function Task6(props) {
  return (
    <div className='task__wrapper'>
      <ul>
        <li>Prij : {props.parij}</li>
        <li>Yaponiya: {props.tokiyo}</li>
        <li> AQSH :{props.NyuYork}</li>
        <li>London : {props.london}</li>
        <li>Toshkent : {props.toshkent}</li>
      </ul>
    </div>
  )
}

export default Task6
