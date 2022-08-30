import { createContext, useState, useEffect } from "react";

 export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart Products", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, contador: inCart.contador + product.contador };
          } else return { productInCart };
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, contador: product.contador }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
   
    if (inCart.amount === 1) {
      setCartItems(cartItems.filter((productInCart) => productInCart.id !== product.id));
      console.log(cartItems, "hola222");
    } else {
       console.log(cartItems, "hola");
      setCartItems((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, contador: inCart.contador - 1 };
        } else return productInCart;
      });
    }
  };
  return <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemToCart }}>
    {children}
    </CartContext.Provider>;
};

export default CartContext;
export { CartProvider };
