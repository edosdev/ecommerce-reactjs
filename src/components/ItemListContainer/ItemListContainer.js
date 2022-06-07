import "./ItemListContainer.css";
import ItemList  from "../Items/ItemList";

const ItemListContainer = ({filtro}) => {
  console.log("hola filtro", filtro);
  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 gap-3 sm:grid-cols-2">
        <ItemList filtrocat={filtro}></ItemList>
      </div>
    </>
  );
};

export default ItemListContainer;
