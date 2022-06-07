import { useState, useEffect } from "react";
import Item from "./Item";
import productos from "../../utils/productos-mock";
import { capitalize } from "@mui/material";

const ItemList = ({ filtrocat }) => {
  console.log("ejecutando filtro", filtrocat);
  const [products, setProducts] = useState([]);
  const [filtroCategoria, setCategoria] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos) {
          resolve(productos);
        } else {
          reject("error en llamada de la API");
        }
      }, 2000);
    });
  };

  // setLoader(true);
  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log("Respuesta de la Promesa: ", response);
        if (filtrocat) {
          setCategoria(response);
        } else {
          setProducts(response);
        }
      })

      .catch((err) => {
        // console.log("Fallo la llamada.", err);
      })
      .finally(() => {
        // setLoader(false);
        // console.log("Cargo Todo");
      });
  }, [filtrocat]);



  return (
    
    <>

      {filtroCategoria.find(
        // eslint-disable-next-line
        (b) => {
        // eslint-disable-next-line
        console.log(b.categoria == capitalize(filtrocat));
      })}
      {products.map((producto) => {
        // console.log("este es el producto: ", producto);
        return (
          <Item
            id={producto.id}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
            precio_final={producto.precio_final}
            stock={producto.stock}
            tamano={producto.tamano.map((t) => (
              <div className="tamano-contenedor">
                <input class="radio radio-primary" type="radio" id={t.name} name="tamano" value={t.price} /> {t.name}
              </div>
            ))}
          ></Item>
        );
      })}
    </>
  );
};

export default ItemList;
