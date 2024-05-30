import Item from './Item';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
      <div className="item-list pt-4 mt-4">
        {items.map(item => (
           <Item key={item.id} item={item} />
        ))}
      </div>
  )
};

export default ItemList;