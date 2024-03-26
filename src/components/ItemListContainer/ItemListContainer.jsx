import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizo la promesa"));
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
