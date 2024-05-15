import { useState } from "react";

const ItemCount = ({stock}) => {
    
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-light-subtle" onClick={decrementar}>-</button>
                        <button type="button" className="btn bg-light-subtle">{contador}</button>
                        <button type="button" className="btn bg-light-subtle" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    {itemStock > 1 ? <button type="button" className="btn bg-light-subtle" onClick={onAdd}>Agregar al Carrito</button> :
                    <button type="button" className="btn bg-light"><b>SIN STOCK</b></button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;