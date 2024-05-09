import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./components/ItemDetailContainer";
import Products from "./components/ItemList";
import Cart from "./components/Cart";
import Ofertas from "./components/Ofertas";
import Product from "./components/Product";
import NotFound from "./components/Notfound";
import Contacto from "./components/Contacto";
import InfoNosotros from "./components/Info";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/ofertas" element={<Ofertas />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/info" element={<InfoNosotros />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;