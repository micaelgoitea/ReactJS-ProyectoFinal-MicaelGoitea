import { useParams } from "react-router-dom";

const Product = () => {
    const {productId} = useParams();
    return (
        <div className="item-card">
            <h2>Producto {productId}</h2>
            

            
        </div>
    )
}

export default Product;