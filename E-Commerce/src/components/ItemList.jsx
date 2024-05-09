import { NavLink } from "react-router-dom";
import Item from "./ItemDetail";
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <>
      <h3>Lista de productos</h3>
      <div className="item-list">
        {items.map(item => (
          <NavLink to="/product/{item.id}"> <Item key={item.id} item={item} /> </NavLink>
        ))}
      </div>
    </>
  )
};

export default ItemList;