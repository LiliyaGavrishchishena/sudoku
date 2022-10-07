import React from 'react'
import './Button.css'

const BTNSSTYLES = ['btn-green', 'btn-orange']

const Button = ({ text, type, onClick, buttonStyle }) => {
  const checkStyle = BTNSSTYLES.includes(buttonStyle)
    ? buttonStyle
    : BTNSSTYLES[0]

  return (
    <button className={`btn ${checkStyle}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button
