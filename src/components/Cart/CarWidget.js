import  './CartWidget.css';
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from 'react';


const CartWidget = () => {
  const [cart, setCart] = useState([])



  return (
    <div className=" cart-container ml-10 mr-5" >
      <ShoppingCartIcon className="h-10 w-10  text-white" />
      <div className="contador-cart text-color1">1</div>
      <div className="cont-widget w-60 left-100 absolute container mx-auto bg-base-100 shadow-lg">
        <p className="vacioCarro">
          <span>&#128532;</span>Carrito Vacio
        </p>
        {/* <div className="item-widgetCard">
          <img src="/img-pizzas/p-diabla.jpg" class="" alt="" />
          <div className="item-info">
            <p>Producto</p>
            <span className="Cantidad">
              1 <b>X</b>
            </span>
            <span>1000</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CartWidget;
