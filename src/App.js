import './App.css';
import './index.css'
import Navbar from './components/NavBar/NavBar';
import ItemDetailConatiner from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-10">
        {/* <ItemListContainer /> */}
        {/* <Modal /> */}
        <ItemDetailConatiner />
      </div>
    </div>
  );
}

export default App;
