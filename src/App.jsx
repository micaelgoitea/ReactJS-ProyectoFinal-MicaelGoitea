import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/ItemDetail/ItemListContainer";
import ItemListContainer from "./components/ItemDetail/ItemListContainer";
import Cart from "./components/Pages/Cart";
import NotFound from "./components/Pages/Notfound";
import InfoNosotros from "./components/Pages/Info";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContextProvider from "./components/Context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Consulta from "./components/Pages/Contacto";

function App() {
  return (
    <>
      <CartContextProvider> 
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
        <Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contacto" element={<Consulta />} />
        <Route exact path="/info" element={<InfoNosotros />} />
        <Route exact path={"/checkout"} element={<Checkout />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      </CartContextProvider>
    </>
  )
}

export default App;