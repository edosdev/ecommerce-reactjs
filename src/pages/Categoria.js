import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from "react-router-dom";


const Categoria = () => {
  const { filtroCategoria } = useParams();

  return <ItemListContainer filtro={filtroCategoria} />;
};

export default Categoria;
