import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();

useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const resultQuery = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
  getDocs(resultQuery).then(snapShot => {
    if (snapShot.size > 0) {
      setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
      setLoading(false);
    } else {
      console.log("No existen Documentos!");
      setItems([]);
    }
  });
}, [categoryId]);

// Carga de productos en FireBase

/*   useEffect(() => {
  const baseDeDatos = getFirestore();
  const itemsCollection = collection(baseDeDatos, "items");
  
  arrayProductos.forEach (producto => {
    addDoc(itemsCollection, producto)
  })

  console.log ("Productos cargados en la base de Datos")

}, []); */

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