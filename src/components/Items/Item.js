import "./item.css";
import ItemCount from "./ItemCount";
import ItemSize from "./ItemSize";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";

const Item = ({ id, titulo, descripcion, imagen, precio_final, stock, tamano }) => {
  // console.log("el id de producto", id)
  // eslint-disable-next-line

  const { addProductCart } = useContext(CartContext);

  const [contador, setContador] = useState(1);

  const [select, setSelec] = useState();
  const [precioSelecionado, setprecioSelecionado] = useState(select);

  // eslint-disable-next-line
  let precioSelect = () => {
    if (!select) {
      const precioDesde = precio_final.price;
      let desde = <div className="precio-desde">${precioDesde}</div>;
      return desde;
    } else {
      return select;
    }
  };

  function verificarSelecion(e) {
    if (e === undefined) {
      setprecioSelecionado(precio_final.price);
    }
  }

  // me da resultado precio selecionado para el carrito en tipo numbers

  const data = { id, titulo, descripcion, imagen, contador, precioSelecionado }; // envia al carrito

  const onAdd = (e) => {
    e.preventDefault();
    addProductCart({ ...data });
    // console.log(contador);
  };

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <figure>
        <Link to={`/producto/${id}`}>
          <img src={imagen} alt={titulo} />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p className="text-left">{descripcion}</p>
        <div class="flex w-100">
          <form className="text-left w-3/5" method="post" action>
            <ItemSize tamanos={tamano} seleccionado={setSelec} />
          </form>
          <div className="precio text-right w-2/5">
            <span>{precioSelect()}</span>
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-5">
          <ItemCount stock={stock} initial={1} actualizar={setContador} conteo={contador} />
          <button className="btn btn-primary text-white" onClick={onAdd}>
            Agregar al Carrito
          </button>
        </div>

        <div className=" text-neutral font-bold mt-4">
          <Link to={`/producto/${id}`}>Ver Mas Información</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
