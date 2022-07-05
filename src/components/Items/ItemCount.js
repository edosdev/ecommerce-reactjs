
const ItemCount = ({stock, actualizar, conteo}) => {


  function stockSelec(selected) {
     let ss;
     return ss +=  selected
  }

  const decremento = () => {
    if (conteo > 0) {
      actualizar(conteo - 1);
    }
  };
  const incremento = () => {
    if (conteo < stock) {
      actualizar(conteo + 1);
    }
  };
stockSelec();
  return (
    <>

        <div className="flex w-100 items-center">
          <button className="btn btn-neutro font-bold text-white" onClick={decremento}>
            -
          </button>
          <input type="text" className="w-10 text-accent text-center  font-semibold focus:outline-none" pattern="[0-9]*\.?[0-9]*" value={conteo} />

          <button className="btn btn-neutro font-bold text-white" onClick={incremento}>
            +
          </button>
        </div>
    </>
  );
};


export default ItemCount;


