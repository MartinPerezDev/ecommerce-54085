import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext);


  //early return
  if(cart.length === 0){
    return <div>No hay productos en el carrito</div>
  }

  return (
    <div className="cart">
      <h2>Productos en el carrito</h2>
      <div className="products-cart">
        {cart.map((product) => (
          <div key={product.id} className="product-cart">
            <img className="image-product-cart" src={product.image} />
            <p className="info-product-cart">{product.name}</p>
            <p className="info-product-cart">Cantidad: {product.quantity}</p>
            <p className="info-product-cart">Precio c/u: {product.price}</p>
            <p className="info-product-cart">Total: {product.quantity * product.price}</p>

            <button onClick={ () => deleteProductById(product.id)} >Eliminar producto</button>
          </div>
        ))}
      </div>
      <div className="controls-cart">
        <h2> Precio total: {totalPrice()}</h2>
        <button className="button-cart" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};
export default Cart;
