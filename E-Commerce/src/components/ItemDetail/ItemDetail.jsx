import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="card text-center bg-success-subtle">
      <div className="card-body text-center position-relative">
        <img src={item.imageUrl} alt={item.name} className="img-fluid item-image item-center" />
        <h5 className="card-title">{item.name}</h5>
        <p className="item-price">Precio: ${item.price}</p>
        <p className="card-text">{item.info}</p>
        <div className='counter'><ItemCount stock={item.stock}/></div>
      </div>
    </div>
  )
};

export default ItemDetail;