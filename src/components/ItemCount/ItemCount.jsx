import { useState } from "react";

import "./itemCount.css";

const ItemCount = ({ handleAddToCart, stock }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if(count < stock){
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="button-add" onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
      <div className="controls-count">
        <button className="button-count" onClick={handleSubtract}>-</button>
        <p> {count} </p>
        <button className="button-count" onClick={handleAdd}>+</button>
      </div>
    </div>
  );
};
export default ItemCount;
