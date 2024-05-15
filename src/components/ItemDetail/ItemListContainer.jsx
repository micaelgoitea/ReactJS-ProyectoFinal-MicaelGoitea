import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import arrayProductos from "../json/productos.json";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrayProductos);
    }, 2000)
  })
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(id ? data.filter(item => item.category == id) : data);
      setLoading(false);
    };

    fetchData();
  }, [id])

  return (
    <div className="item-list-container">
      <h1>Bienvenidos a Digital Emporium</h1>
      {
        loading ? <Loading /> : <ItemList items={items} />
      }

    </div>
  )
};

export default ItemListContainer;