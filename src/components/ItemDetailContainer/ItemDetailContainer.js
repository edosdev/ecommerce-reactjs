import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { producto } from "../../utils/productos-mock";

const ItemDetailConatiner = () => {

  const [product, setproduct] = useState({})
  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (producto) {
          resolve(producto);
        } else {
          reject("error en llamada de la API");
        }
      }, 2000);
    });
  };

  useEffect(() => {
    getItem()
    .then((response) => {
      // console.log("mi respuesta", response.tamano);
      setproduct(response)

    });
  });

  return (
    <>
      <ItemDetail data={product}/>
    </>
  );
};

export default ItemDetailConatiner;
