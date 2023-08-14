import React from 'react'
import "./style.scss"


const Seat = ({ghe}) => {
  return (
    <div className='Seat d-flex' key={ghe.soGhe}>{ghe.soGhe}</div>
  )
}

export default Seat