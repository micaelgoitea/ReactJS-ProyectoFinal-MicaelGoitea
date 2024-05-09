import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'PC de Escritorio', imageUrl: "https://picsum.photos/200", price: 10 },
        { id: 2, name: 'PC Gamer', imageUrl: "https://picsum.photos/200", price: 20 },
        { id: 3, name: 'Notebook', imageUrl: "https://picsum.photos/200", price: 30 },
        { id: 4, name: 'Netbook', imageUrl: "https://picsum.photos/200", price: 40 },
        { id: 5, name: 'Notebook', imageUrl: "https://picsum.photos/200", price: 50 },
        { id: 6, name: 'Tablet', imageUrl: "https://picsum.photos/200", price: 60 }
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