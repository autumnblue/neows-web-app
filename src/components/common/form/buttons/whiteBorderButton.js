import React from 'react'

const WhiteBorderButton = ({ text, extraClass }) => {
  return (
    <button className={`white-border ${extraClass}`}>{text}</button>
  )
}

export default WhiteBorderButton