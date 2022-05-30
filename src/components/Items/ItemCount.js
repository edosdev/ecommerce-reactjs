
import React, { useState } from "react";

const ItemCount = ({stock, initial}) => {
 
  const [count, setCount] = useState(initial);

  const decremento = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const incremento = () => {
    if (count < stock) {
      setCount(count + 1);

    }
  };
    const onAdd = () => {
      console.log(" Se agrego el Producto la cantidad de " + count);
    };

  return (
    <>
      <div className="card-actions justify-between items-center mt-5">
        <div className="flex w-100 items-center">
          <button className="btn btn-neutro font-bold text-white" onClick={decremento}>
            -
          </button>
          <input type="text" className="w-10 text-accent text-center  font-semibold focus:outline-none" pattern="[0-9]*\.?[0-9]*" value={count} />

          <button className="btn btn-neutro font-bold text-white" onClick={incremento}>
            +
          </button>
        </div>
        <button className="btn btn-primary text-white" onClick={onAdd}>
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;