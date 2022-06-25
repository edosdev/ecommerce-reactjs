import Carrusel from "../components/Carrusel/Carrusel";
import ItemDetailConatiner from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <Carrusel />
      <h2 className="py-10 capitalize text-4xl text-2xl font-bold">Menu Espectacular</h2>
      <ItemDetailConatiner />
    </>
  );
};

export default Home;
