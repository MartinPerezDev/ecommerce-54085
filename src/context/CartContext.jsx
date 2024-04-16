import { createContext, useState } from "react"

//Creamos un contexto de React
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  //logica de no aceptar duplicados
  
  const addToCart = (newProduct) => {
    setCart([...cart, newProduct])
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, product) => total + product.quantity , 0)
    return quantity
  }

  const clearCart = () =>{
    setCart([])
  }

  //eliminar un producto especifico por su id

  //devolver el precio total de la compra

  return(
    <CartContext.Provider value={ { cart, addToCart, totalQuantity, clearCart } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }