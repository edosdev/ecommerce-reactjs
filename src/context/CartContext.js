import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>  {
  const  [cartListItems, setCarlistItems] = useState([])
  const addProductCart = (producto) => {
    setCarlistItems([producto]);
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