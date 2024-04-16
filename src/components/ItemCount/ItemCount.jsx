import { useState } from "react";

const ItemCount = ({ handleAddToCart }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    //proximamente codicionamos con el stock
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSubtract}>-</button>
        <p> {count} </p>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={ ()=> handleAddToCart(count)} >Agregar al carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
