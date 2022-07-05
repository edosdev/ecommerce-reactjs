import "./CartWidget.css";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  // eslint-disable-next-line
  const { cartListItems } = useContext(CartContext);



  return (
    <div className=" cart-container ml-10 mr-5">
      <ShoppingCartIcon className="h-10 w-10  text-white" />
      <div className="contador-cart text-color1">1</div>
      {/* Contenido de Carrito */}
      <div className="cont-widget w-60 left-100 absolute container mx-auto bg-base-100 shadow-lg">
        {/* Carrito Vacio */}
        <p className="vacioCarro">
          <span>&#128532;</span>Carrito Vacio
        </p>
        {/* END Carrito Vacio */}

        {/* Item */}
        {cartListItems.map((item) => {
          return (
            <div className="item-widgetCard mb-2">
              <img src={item.imagen} class="" alt="" />
              <div className="item-info">
                <p>{item.titulo}</p>
                <span className="Cantidad">
                  {item.contador} <b>X</b>
                </span>
                <span>{item.precioSelect}</span>
                <span>
                  <Icon icon="bx:trash" width="24" hFlip={true} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* END Contenido de Carrito */}
    </div>
  );
};

export default CartWidget;
