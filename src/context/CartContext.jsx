import { createContext, useState } from "react"

//Creamos un contexto de React
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (newProduct) => {
    const condicion = isInCart(newProduct.id)
    if(condicion){
      //sumar la cantidad a ese producto en especifico
      const productsMod = cart.map( (productCart)=> {
        if(productCart.id === newProduct.id){
          return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
        }else{
          return productCart
        }
      })

      setCart(productsMod)
    }else{
      //agregamos como producto nuevo
      setCart([...cart, newProduct])
    }
  }

  //funcion para detectar si x producto esta en el carrito
  const isInCart = (productId) => {
    const condicion = cart.some( (product)=> product.id === productId )
    return condicion
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, product) => total + product.quantity , 0)
    return quantity
  }

  const clearCart = () =>{
    setCart([])
  }

  const deleteProductById = (productId) => {
    const productsFilter = cart.filter( (productCart)=> productCart.id !== productId )
    setCart(productsFilter)
  }

  const totalPrice = () => {
    const total = cart.reduce( (total, product) => total + ( product.quantity * product.price ), 0)
    return total
  }

  return(
    <CartContext.Provider value={ { cart, addToCart, totalQuantity, clearCart, deleteProductById, totalPrice } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }