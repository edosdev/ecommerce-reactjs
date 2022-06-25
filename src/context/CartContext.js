import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>  {
  const  [cartListItems, setCarlistItems] = useState([])
  const data =  {
      cartListItems
  }
  return (
    <CartContext.Provider value={data}>
      {children}  
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider };