import React from 'react'
import './SqaureComponent.css'

const SqaureComponent = ({ value, onClick }) => {
  return (
    <button className='sqaure' onClick={onClick}>{value}</button>
  )
}

export default SqaureComponent
