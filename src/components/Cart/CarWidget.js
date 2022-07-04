import  './CartWidget.css';
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from 'react';
import { Icon } from "@iconify/react";


const CartWidget = () => {
  // eslint-disable-next-line
  const [cart, setCart] = useState([]);

  return (
    <div className=" cart-container ml-10 mr-5">
      <ShoppingCartIcon className="h-10 w-10  text-white" />
      <div className="contador-cart text-color1">1</div>
      <div className="cont-widget w-60 left-100 absolute container mx-auto bg-base-100 shadow-lg">
        {/* Carrito Vacio */}
        <p className="vacioCarro">
          <span>&#128532;</span>Carrito Vacio
        </p>
        {/* END Carrito Vacio */}

        {/* Item */}
        <div className="item-widgetCard mb-2">
          <img src="/img-pizzas/p-diabla.jpg" class="" alt="" />
          <div className="item-info">
            <p>Producto</p>
            <span className="Cantidad">
              1 <b>X</b>
            </span>
            <span>1000</span>
            <span>
              <Icon icon="bx:trash" width="24" hFlip={true} />
            </span>
          </div>
        </div>
        {/* END Item */}
      </div>
    </div>
  );
};

export default CartWidget;
