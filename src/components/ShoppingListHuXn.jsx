import React, { useState } from "react";

const ShoppingListHuXn = () => {
  const [items, setItems] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");

  function handleNameChange(event) {
    setInputName(event.target.value);
  }
  function handleQuantityChange(event) {
    setInputQuantity(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (inputName.trim() && inputQuantity.trim()) {
      setItems([...items, { name: inputName, quantity: inputQuantity }]);
    }
    setInputName("");
    setInputQuantity("");
  }

  return (
    <div>
      <h1>Shopping List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleNameChange}
          value={inputName}
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="Product Quantity"
          onChange={handleQuantityChange}
          value={inputQuantity}
          required
        />

        <button type="submit">Insert Product</button>
      </form>

      {items.map((item, index) => (
        <li key={index}>
          Name: {item.name} -- Quantity: {item.quantity}
        </li>
      ))}
    </div>
  );
};

export default ShoppingListHuXn;
