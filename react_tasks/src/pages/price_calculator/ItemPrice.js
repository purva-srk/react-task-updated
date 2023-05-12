import { useState } from "react";
import { Card } from "antd";

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
    <div>
      <Card title="Price Calculator" className="card_price" hoverable>
        <label>Price </label>
        <input className="price" type="number" onChange={handlePrice} />
        {" X "}
        <label>Quantity </label>
        <input className="price" type="number" onChange={handleQuantity} />
        <p>
          The total cost of {quantity} items is {(price * quantity).toFixed(2)}
        </p>
      </Card>
    </div>
  );
};

export default ItemPrice;
