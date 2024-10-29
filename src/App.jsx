import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import Inicio from "./components/Inicio";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;