import './App.css';
import './index.css'
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from "./pages/Contacto";
import Promociones from "./pages/Promociones";
import ServiciosAdicionales from "./pages/Serviciones_Adicionales";
import NoEncotrado from "./pages/404";
import DetalleProducto from './pages/DetalleProducto'
import Categoria from "./pages/Categoria"
import ThemeProvider from "./context/ThemeContext";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
            <div className="container mx-auto mt-4 mb-10">
              <Routes>
                <Route exact path="/*" element={<NoEncotrado />}></Route>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/producto/:id" element={<DetalleProducto />}></Route>
                <Route exact path="/:categoria/:id" element={<DetalleProducto />}></Route>
                <Route exact path="/categoria/:filtroCategoria" element={<Categoria />}></Route>
                <Route exact path="/contacto" element={<Contacto />}></Route>
                <Route exact path="/promociones" element={<Promociones />}></Route>
                <Route exact path="/serviciones-adicionales" element={<ServiciosAdicionales />}></Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
