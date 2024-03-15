import { useState } from "react";
import Count from "./Count";

const CountController = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
    console.log("Clickeamos el boton de sumar", contador);
  };

  const borrar = () => {
    setContador(1)
  };

  return (
    <Count contador={contador} sumar={sumar} borrar={borrar} />
  );
};
export default CountController;
