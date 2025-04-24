import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1299" },
        { id: 3, name: "Tablet", price: "$499" },
        { id: 4, name: "Smartwatch", price: "$299" },
        { id: 5, name: "Headphones", price: "$199" },
        { id: 6, name: "Camera", price: "$899" },
        { id: 7, name: "Printer", price: "$249" },
        { id: 8, name: "Monitor", price: "$349" },
        { id: 9, name: "Keyboard", price: "$99" },
        { id: 10, name: "Mouse", price: "$49" },
        { id: 11, name: "Speaker", price: "$149" }
      ];
      
  return (
    <div>

    {
        products.map(({id,name,price})=>(

            <ul key={id}>
                <li>Product Name:{name}</li>
                <li>Price:{price}</li>
            </ul>
        ))
    }


    </div>
  )
}

export default ProductList