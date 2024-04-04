import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductById, addProduct, setProduct, deleteProduct } from "../../helpers/fetchApi";
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const newProduct = {
    nombre: "MX MECHANICAL",
    descripcion: "Teclado inalámbrico iluminado de alto desempeño",
    categoria: "teclado",
    stock: 2,
    precio: 4000,
    imagen: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-mechanical/gallery/mx-mechanical-keyboard-top-view-graphite-us.png?v=1"
  }

  const productMod = {
    descripcion: "Descripcion actualizada desde React"
  }

  useEffect(() => {
    getProducts()
      .then((data)=> setProducts(data))

    getProductById(1)
      .then((data) => console.log(data))
    /*
    addProduct(newProduct)
      .then((data)=> console.log(data))
    */
    /*
    setProduct(3, productMod)
      .then((data)=> console.log(data))
    */
  
    
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
