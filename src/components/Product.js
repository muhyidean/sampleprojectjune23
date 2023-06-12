
import React from 'react'

const Product = (props) => {


  return (
    <div className='Content'>
        <h2>Name: {props.name}</h2>
        <h3>Price: {props.price}</h3>
    </div>
  )

}

export default Product