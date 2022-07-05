import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>  {
  const  [cartListItems, setCarlistItems] = useState([])
 
  const addProductCart = (producto) => {
    let inCart = cartListItems.find(productoEnCarrito => productoEnCarrito.id === producto.id)
    if(!inCart){
      setCarlistItems(cartListItems => [...cartListItems, producto]);
      console.log("producto agregado desde context: ", producto)
    }else{
      alert("ya esta en carrito")
    }
    
  }
  const data =  {
      cartListItems,
      addProductCart
  }
  return (
    <CartContext.Provider value={data}>
      {children}  
    </CartContext.Provider>
  )
}

export default CartContext;
export { CartProvider };