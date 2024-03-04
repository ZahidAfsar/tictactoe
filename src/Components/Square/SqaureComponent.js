import React from 'react'

const SqaureComponent = ({ value, onClick }) => {
  return (
    <button className='sqaure' onClick={onClick}>{value}</button>
  )
}

export default SqaureComponent
