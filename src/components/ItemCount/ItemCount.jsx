import { useState } from "react";

const ItemCount = ({ addToCart }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    //proximamente codicionamos con el stock
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={restar}>-</button>
        <p> {count} </p>
        <button onClick={sumar}>+</button>
      </div>
      <div>
        <button onClick={ ()=> addToCart(count)} >Agregar al carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
