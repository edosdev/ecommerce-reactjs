import "./ItemListContainer.css";
import ItemList  from "../Items/ItemList";

const ItemListContainer = () => {
  
  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 gap-3 sm:grid-cols-2">
        <ItemList></ItemList>
      </div>
    </>
  );
};

export default ItemListContainer;
