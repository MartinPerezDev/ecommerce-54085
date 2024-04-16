import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext)

  return (
    <div>
      {
        cart.map((product)=> (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={product.image} style={{width:"120px", height: "100px"}} />
          </div>
        ))
      }

      <button onClick={clearCart} >Vaciar carrito</button>
    </div>
  )
}
export default Cart