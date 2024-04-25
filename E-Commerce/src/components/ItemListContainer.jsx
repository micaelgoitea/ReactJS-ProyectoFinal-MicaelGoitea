import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'PC de Escritorio', price: 10 },
        { id: 2, name: 'PC Gamer', price: 20 },
        { id: 3, name: 'Notebook', price: 30 },
        { id: 4, name: 'Netbook', price: 40 },
        { id: 5, name: 'Notebook', price: 50 },
        { id: 6, name: 'Tablet', price: 60 }
        ]
      )
    }, 3000)
  })
};

const ItemListContainer = () => {
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
        <h1>Bienvenidos a mi tienda OnLine</h1>
        {
          loading
        ? <div> Cargando... </div>
        :  <ItemList items={items} />
        }
      </div>
  )
};
  
  export default ItemListContainer;