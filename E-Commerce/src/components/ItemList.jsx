import Item from "./ItemDetail";
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <>
      <h3>Lista de productos</h3>
      <div className="item-list">
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  )
};

export default ItemList;