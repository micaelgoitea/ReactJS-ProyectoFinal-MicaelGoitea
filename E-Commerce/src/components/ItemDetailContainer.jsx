import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import './ItemDetailContainer.css';

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'PC de Escritorio 8GB RAM Core I5 500 GB SSD', imageUrl: "https://http2.mlstatic.com/D_NQ_NP_725359-MLA48853014422_012022-O.webp", price: "650.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 2, name: 'PC Gamer 32 GB RAM Core I7 1 TB SSD', imageUrl: "https://http2.mlstatic.com/D_NQ_NP_612434-MLA72459976436_102023-O.webp", price: "1.200.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 3, name: 'Notebook Dell 4 GB RAM Core I3 250 GB SSD', imageUrl: "https://www.fullh4rd.com.ar/img/productos/32/notebook-dell-156-inspiron-3511-i31115g4-4gb-256gb-ubuntu-1.jpg", price: "350.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 4, name: 'Samsung Galaxy Core Android 5.0', imageUrl: "https://www.tuexperto.com/wp-content/uploads/2015/05/Samsung-Galaxy-Core-Prime-02.jpg", price: "500.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 5, name: 'iPhone 14 Pro Max Gold 256 GB', imageUrl: "https://acdn.mitiendanube.com/stores/001/321/783/products/31mx9scnezl-_sl500_1-640-0-77f20e2efc4b72394f16790588480866-640-0.jpg", price: "1.500.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 6, name: 'Tablet Galaxy Tab Android 7.0', imageUrl: "https://www.computershopping.com.ar/Images/Productos/Grandes/SM-T113NU_Foto3g.jpg", price: "700.000", info: "6 Cuotas Fijas sin Interes"},
        { id: 7, name: 'Smart Watch Apple', imageUrl: "https://i5.walmartimages.com/seo/Pre-Owned-Apple-Watch-Series-5-GPS-Cellular-40mm-Smartwatch_0c5577e4-6591-459f-984e-33ef36a35860_1.3f7551795482100bbadc029e8829cf73.jpeg", price: "300.000", info: "3 Cuotas Fijas sin Interes"},
        { id: 6, name: 'Smart Watch Samsung', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVbSsPEmrNctA7LQu-pQzvF7j0o399Q6Uleqf8vA27g&s", price: "250.000", info: "3 Cuotas Fijas sin Interes"}
      ]
      )
    }, 3000)
  })
};

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    fetchData();
  }, [])

  return (
    <div className="item-list-container">
      <h1>Bienvenidos a Digital Emporium</h1>
      {
        loading
          ? <div> Cargando... </div>
          : <ItemList items={items} />
      }
    </div>
  )
};

export default ItemDetailContainer;