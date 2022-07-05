import './item.css'
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import  CartContext  from '../../context/CartContext';
import { useContext, useState } from 'react';

const Item = ({ id, titulo, descripcion, imagen, precio_final, stock, tamano }) => {
  // console.log("el id de producto", id)
  // eslint-disable-next-line

  const { addProductCart } = useContext(CartContext);

  const [contador, setContador] = useState(1);
  
  const [precioSelect, setprecioSelect] = useState(precio_final);

  const data = { id, titulo, descripcion, imagen, contador, precioSelect }; // envia al carrito

  const onAdd = (e) => {
    e.preventDefault();
    addProductCart({ ...data });
    console.log(contador);
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
            {tamano}
          </form>
          <div className="precio text-right w-2/5">
            <span>{precio_final}</span>
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
