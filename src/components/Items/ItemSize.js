import "./item.css";

const ItemSize = ({tamanos, seleccionado}) => {


   const selectt = e => {
     seleccionado(e.target.value);
  }
  
  return ( tamanos.map((t) => (
    // console.log(t.name, t.price);
    <div className="tamano-contenedor">
      <input class="radio radio-primary" type="radio" id={t.name} name="tamano" value={t.price} onClick={selectt} /> {t.name}
    </div>
  ))
)
}

export default ItemSize;

