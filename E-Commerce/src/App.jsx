import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/ItemDetail/ItemListContainer";
import ItemListContainer from "./components/ItemDetail/ItemListContainer";
import Cart from "./components/Pages/Cart";
import Ofertas from "./components/Pages/Ofertas";
import NotFound from "./components/Pages/Notfound";
import Contacto from "./components/Pages/Contacto";
import InfoNosotros from "./components/Pages/Info";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/category/:id"} element={<ItemListContainer />} />
        <Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
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