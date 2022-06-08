import { useState, useEffect } from "react";
import Item from "./Item";
import productos from "../../utils/productos-mock";

const ItemList = ({ filtrocat }) => {
  console.log("ejecutando filtro", filtrocat);
  const [products, setProducts] = useState([]);
  const [filtro, setCategoria] = useState([]);

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

  // eslint-disable-next-line
let r = filtro.filter((p) => {
  let categorias = p.categoria;
  if (categorias.includes("eventos")) {
    return p;
  }
});

  return (
    <>
      {r.map((resultadof) => {
        return (
          <Item
            id={resultadof.id}
            titulo={resultadof.titulo}
            descripcion={resultadof.descripcion}
            imagen={resultadof.imagen}
            precio_final={resultadof.precio_final}
            stock={resultadof.stock}
            tamano={resultadof.tamano.map((t) => (
              <div className="tamano-contenedor">
                <input class="radio radio-primary" type="radio" id={t.name} name="tamano" value={t.price} /> {t.name}
              </div>
            ))}
          ></Item>
        );
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
