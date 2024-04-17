import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer cantidad="dos" nombreProdcuto="Galletitas" />
    </div>
)
}

export default App;