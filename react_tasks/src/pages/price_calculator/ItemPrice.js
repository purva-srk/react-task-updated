import { useState } from "react";

const ItemPrice = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="card_price">
      <h2>Price Calculator</h2>
      <label className="label_celsius">Price </label>
      <input className="celsius" type="number" onChange={handlePrice} />
      {" X "}
      <label className="label_celsius">Quantity </label>
      <input className="celsius" type="number" onChange={handleQuantity} />
      <p>
        The total cost of {quantity} items is {price * quantity}
      </p>
    </div>
  );
};

export default ItemPrice;
