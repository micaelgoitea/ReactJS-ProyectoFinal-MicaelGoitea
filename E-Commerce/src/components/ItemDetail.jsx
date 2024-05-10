import './ItemDetail.css';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">Precio: ${item.price}</p>
        <p className='item-info'>Pago: {item.info}</p>
        <NavLink to={`/product/${item.id}`} > <button> Ver Detalles </button> </NavLink>
      </div>
    </div>
  )
};

export default Item;