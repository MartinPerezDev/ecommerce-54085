import { useState } from "react";

const ItemCount = ({ handleClick, stock }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if(count < stock){
      setCount(count + 1);
    }
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
        <button onClick={ ()=> handleClick(count)} >Agregar al carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
