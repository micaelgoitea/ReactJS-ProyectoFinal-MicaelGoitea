import React from "react";

const ItemListContainer = ({cantidad, nombreProdcuto}) => {
  return (
    <div>
      <h3>Lista de productos</h3>
      <p> Se agregaron {cantidad} {nombreProdcuto} al carrito.</p>
    </div>
  )
  }
  
  export default ItemListContainer;