import React from 'react'
import Product from './Product'

const Products = () => {

    console.log("Products reloaded...")
    const data = [
        { id: 111, name: "Dell", price: 900 },
        { id: 112, name: "iPhone14", price: 1100 }
    ]

    const products = data.map(p => {
        return <Product id={p.id} key={p.id} name={p.name} price={p.price} /> 
    })

    return products;
}

export default Products