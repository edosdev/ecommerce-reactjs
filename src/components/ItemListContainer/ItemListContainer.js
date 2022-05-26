import "./ItemListContainer.css";
import ItemCount from "./ItemCount"

const ItemListContainer = () => {
  // Create a new ItemListContainer

  return (
    <>
      <div className="flex gap-4 ">
        {/* Card de Producto */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://api.lorem.space/image/pizza?w=400&h=225" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Producto</h2>
            <p className="text-left">Descripción del Producto</p>
            <div class="flex w-100">
              <form className="text-left w-3/5" method="post" action>
                <div className="tamano-contenedor">
                  <input class="radio radio-primary" type="radio" id="personal" name="tamano" /> Personal
                </div>
                <div className="tamano-contenedor">
                  <input class="radio radio-primary" type="radio" id="mediana" name="tamano" /> Mediana
                </div>
                <div className="tamano-contenedor">
                  <input class="radio radio-primary" type="radio" id="familiar" name="tamano" /> Familiar
                </div>
                <div className="tamano-contenedor">
                  <input class="radio radio-primary" type="radio" id="extra-grande" name="tamano" /> Extra Grande
                </div>
              </form>
              <div className="precio text-right w-2/5">
                <span>Desde $7.000</span>
              </div>
            </div>
            {/* Contador */}
            <ItemCount stock={5} initial={1} />
            {/* END Contador */}
            <div className=" text-neutral font-bold mt-4">
              <a href="google.com">Ver Mas Información</a>
            </div>
          </div>
        </div>
        {/* END Card de Producto */}
      </div>
    </>
  );
};

export default ItemListContainer;
