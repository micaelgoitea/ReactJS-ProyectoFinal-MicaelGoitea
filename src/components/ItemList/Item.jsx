import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
  return (
    <div className="item-card">
      
        <img src={item.imageUrl} alt={item.name} className="item-image" />
        <div className="item-details">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-price">Precio: ${item.price}</p>
          <p className='item-info'>Opciones de Pago: {item.modoDePago}</p>
          <Link to={"/item/" + item.id}><button>Ver Detalle</button></Link>
        </div>
      
    </div>
  )
};

export default Item;