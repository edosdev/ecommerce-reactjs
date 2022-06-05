const ItemDetail = ({ data, ptamano }) => {
  return (
    <>
      <div class="flex w-full">
        <div class="grid w-1/2 flex-grow card bg-base-300 rounded-box place-items-center">
          <img src={data.imagen} alt={data.titulo} />
        </div>

        <div class="grid w-2/3 flex-grow card rounded-box text-left pl-10">
          <h1 className="text-2xl font-extrabold">{data.titulo}</h1>
          <p>{data.descripcion}</p>
          <price> {data.precio_final}</price>
          {ptamano}
          <div className="text-right">
            <button className="btn btn-primary text-white text-right">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail