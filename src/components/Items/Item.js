import './item.css'
import ItemCount from "./ItemCount";

const Item = ({ titulo, descripcion, imagen, precio_final, stock }) => {

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
          
          </form>
          <div className="precio text-right w-2/5">
            <span>{precio_final}</span>
          </div>
        </div>
        <ItemCount stock={stock} initial={1} />
        <div className=" text-neutral font-bold mt-4">
          <a href="google.com">Ver Mas Información</a>
        </div>
      </div>
    </div>
  );
};

export default Item;
