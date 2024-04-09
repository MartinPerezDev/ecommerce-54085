import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import useCargando from "../../hooks/useCargando";
import "./itemListContainer.css";


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga } = useCargando();

  useEffect(() => {
    mostrarCargando();

    getProducts
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => console.log(error))
      .finally(() => ocultarCargando());
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <ItemList products={products} />
      {cargando ? pantallaDeCarga : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
