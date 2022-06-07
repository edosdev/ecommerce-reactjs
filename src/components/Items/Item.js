import './item.css'
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'

const Item = ({ id, titulo, descripcion, imagen, precio_final, stock, tamano }) => {

  // console.log("el id de producto", id)

  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <figure>
        <img src={imagen} alt={titulo} />
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
        <ItemCount stock={stock} initial={1} />
        <div className=" text-neutral font-bold mt-4">
          <Link to={`/producto/${id}`}>Ver Mas Información</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
