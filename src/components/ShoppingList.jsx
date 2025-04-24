import React, { useEffect, useState } from "react";

const ShoppingList = () => {

  const [list, setList] = useState(() => {
    const newList = localStorage.getItem("list");
    return newList ? JSON.parse(newList) : [];
  });

  useEffect(
    function()
    {
        localStorage.setItem("list",JSON.stringify(list));
    }
    ,
        [list]
  );

  function listInsert()
  {
    const name=document.getElementById("input-name").value;
    const quantity=document.getElementById("input-quantity").value;

    if (!name.trim() || !quantity.trim()) {
        alert("Please enter both product name and quantity.");
        return;
      }

    setList([...list,{name,quantity}]);

    document.getElementById("input-name").value="";
    document.getElementById("input-quantity").value="";

  }

function listDelete(index)
{
  setList(
    list.filter((item,i)=>{
        return i!==index;
    })
  );
}

  return <div>
    <h1>Shopping List</h1>

    <input type="text" id="input-name" placeholder="Enter Product Name" required/>
    <input type="text" id="input-quantity" placeholder="Enter Product Quantity" required/>

    <button onClick={listInsert}>Insert Product</button>
    {
        list.map((item,index)=>(
            <li key={index}>Name:{item.name} -- Quantity:{item.quantity}
            <button onClick={()=>listDelete(index)}>Delete Product</button></li>
        ))
    }
  </div>;
};

export default ShoppingList;
