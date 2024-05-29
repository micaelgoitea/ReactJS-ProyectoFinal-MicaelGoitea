import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem (item, quantity);
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <img src={item.imageUrl} alt={item.name} className="img-fluid item-image item-center" />
            </div>
            <div className="col-md-8">
              <h2 className="card-title">{item.name}</h2>
              <h4 className="item-price">${item.price}</h4>
              <p className="card-text">{item.info}</p>
              <ItemCount className="btn btn-primary" stock={item.stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ItemDetail;