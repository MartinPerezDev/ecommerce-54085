import { useState, useEffect } from "react";
import Count from "./Count";
import Banner from "./Banner";

const CountController = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  //se ejecuta solo al montar el componente
  // ej: llamadas a una api, suscripciones a eventListener
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que contador se actualice
  // para realizar acciones especificas cuando una variable dependiende cambia
  useEffect(() => {
    console.log("2do useEffect");
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useEffect");
  });

  const sumar = () => {
    setContador(contador + 1);
  };

  const borrar = () => {
    setContador(1);
  };

  const alternarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Count contador={contador} sumar={sumar} borrar={borrar} />
      <br />
      <br />
      <div>
        <p>Valor del Toggle: {toggle.toString()} </p>
        <button onClick={alternarToggle}>Cambiar valor toggle</button>
        {
          toggle && <Banner />
        }
      </div>
    </div>
  );
};
export default CountController;
