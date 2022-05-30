import './App.css';
import './index.css'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-10">
        <ItemListContainer />
        {/* <Modal /> */}

      </div>
    </div>
  );
}

export default App;
